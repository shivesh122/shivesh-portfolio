import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Copy, Download, Linkedin, Mail, MapPin, Phone, Send } from "@/components/icons";
import { profile } from "@/data/portfolio";

/*
 * Contact form with a delivery chain, so a message is never silently lost:
 *   1. EmailJS (REST API, no SDK)    -> lands in the inbox via the existing EmailJS template
 *   2. FormSubmit (no account needed) -> backup if EmailJS is down, misconfigured or out of quota
 *   3. If both fail, the visitor gets a pre-filled email draft + copy button, with their text kept
 */

const EMAILJS = { service: "service_3iakb9i", template: "template_sqct42c", publicKey: "dkUnx6eA5mOjVX9DZ" };
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${profile.email}`;
const TIMEOUT_MS = 12000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Phase = "idle" | "sending" | "sent" | "failed";

const validate = (f: Fields): Errors => {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.message.trim().length < 10) e.message = "Please write at least a short message (10+ characters).";
  else if (f.message.length > 5000) e.message = "Please keep the message under 5,000 characters.";
  return e;
};

const postJSON = async (url: string, body: unknown) => {
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
  } finally {
    window.clearTimeout(timer);
  }
};

const sendViaEmailJS = async (f: Fields) => {
  const res = await postJSON("https://api.emailjs.com/api/v1.0/email/send", {
    service_id: EMAILJS.service,
    template_id: EMAILJS.template,
    user_id: EMAILJS.publicKey,
    // Several common variable names, so the message fills in whichever ones the template uses
    template_params: {
      from_name: f.name,
      from_email: f.email,
      reply_to: f.email,
      name: f.name,
      email: f.email,
      message: f.message,
      to_name: profile.name,
      to_email: profile.email,
      title: `Portfolio message from ${f.name}`,
    },
  });
  if (!res.ok) throw new Error(`EmailJS ${res.status}: ${await res.text().catch(() => "")}`);
};

const sendViaFormSubmit = async (f: Fields) => {
  const res = await postJSON(FORMSUBMIT_URL, {
    name: f.name,
    email: f.email,
    message: f.message,
    _replyto: f.email,
    _subject: `Portfolio message from ${f.name}`,
    _template: "table",
    _captcha: "false",
  });
  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (!res.ok || String(data.success) !== "true") throw new Error(`FormSubmit ${res.status}: ${data.message ?? "no details"}`);
};

const Contact = () => {
  const [form, setForm] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [phase, setPhase] = useState<Phase>("idle");
  const [sentName, setSentName] = useState("");
  const [copied, setCopied] = useState(false);
  const [reasons, setReasons] = useState<string[]>([]);
  // Owner diagnostics: open the site with ?debug=1 to see exactly why a delivery route refused a message
  const debug = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("debug");
  const honeypot = useRef<HTMLInputElement>(null);
  const lastSent = useRef(0);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Fields]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (phase === "failed") setPhase("idle");
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`)}&body=${encodeURIComponent(
    `${form.message}\n\n${form.name}\n${form.email}`,
  )}`;

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${profile.email}\n\n${form.message}\n\n${form.name}\n${form.email}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto button is still there */
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === "sending") return;

    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(first)?.focus();
      return;
    }

    // Bots fill hidden fields; real people never see this one. Pretend success and drop it.
    if (honeypot.current?.value) {
      setPhase("sent");
      return;
    }
    // Stop accidental double sends
    if (Date.now() - lastSent.current < 20000) {
      setPhase("sent");
      return;
    }

    setPhase("sending");
    const clean: Fields = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };
    let delivered = false;
    const failures: string[] = [];
    for (const send of [sendViaEmailJS, sendViaFormSubmit]) {
      try {
        await send(clean);
        delivered = true;
        break;
      } catch (err) {
        console.warn("Contact form: delivery attempt failed, trying the next route.", err);
        const msg = err instanceof Error ? err.message : String(err);
        failures.push(/abort/i.test(msg) ? `${send === sendViaEmailJS ? "EmailJS" : "FormSubmit"}: timed out` : msg);
      }
    }

    if (delivered) {
      lastSent.current = Date.now();
      setSentName(clean.name.split(" ")[0]);
      setForm({ name: "", email: "", message: "" });
      setPhase("sent");
    } else {
      setReasons(failures);
      setPhase("failed"); // keep what they typed so nothing is lost
    }
  };

  const fieldProps = (name: keyof Fields) => ({
    id: name,
    name,
    value: form[name],
    onChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    disabled: phase === "sending",
  });

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card" data-reveal>
          <div className="contact-inner">
            <div className="contact-info">
              <span className="eyebrow">06 · Contact</span>
              <h2 id="contact-title">Let's build something with your data.</h2>
              <p>Hiring for a Data Analyst or ML role, or have a project in mind? Send a message and I'll get back to you.</p>

              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>
                  <span className="ic"><Mail /></span>
                  <span><small>Email</small><b>{profile.email}</b></span>
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  <span className="ic"><Phone /></span>
                  <span><small>Phone</small><b>{profile.phone}</b></span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="ic"><Linkedin /></span>
                  <span><small>LinkedIn</small><b>shivesh-nath-tiwari</b></span>
                </a>
                <div>
                  <span className="ic"><MapPin /></span>
                  <span><small>Location</small><b>{profile.location}</b></span>
                </div>
              </div>

              <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener">
                <Download size={17} /> Download résumé (PDF)
              </a>
            </div>

            {phase === "sent" ? (
              <div className="form form-done" role="status" aria-live="polite">
                <span className="done-ic" aria-hidden="true">
                  <Check size={30} />
                </span>
                <h3>Message sent{sentName ? `, ${sentName}` : ""}!</h3>
                <p>Thanks for reaching out. It's in my inbox and I'll reply to your email soon, usually within a day.</p>
                <button className="btn btn-ghost" onClick={() => setPhase("idle")}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate aria-busy={phase === "sending"}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input {...fieldProps("name")} autoComplete="name" placeholder="Your name" maxLength={100} required />
                  {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input {...fieldProps("email")} type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" maxLength={150} required />
                  {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea {...fieldProps("message")} rows={5} placeholder="Tell me about the role or project…" maxLength={5000} required />
                  {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
                </div>

                {/* Honeypot: hidden from people and screen readers, catches spam bots */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input ref={honeypot} id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                {phase === "failed" && (
                  <div className="form-status err" role="alert">
                    <p>
                      Sorry, the message couldn't be sent from here right now. Your text is still in the form. Send it straight
                      from your email app instead:
                    </p>
                    {debug && reasons.length > 0 && (
                      <pre className="debug-reasons">{reasons.join("\n")}</pre>
                    )}
                    <div className="status-actions">
                      <a className="btn btn-primary btn-sm" href={mailto}>
                        <Mail size={16} /> Open in email app
                      </a>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={copyMessage}>
                        {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy message"}
                      </button>
                    </div>
                  </div>
                )}

                <button className="btn btn-primary" type="submit" disabled={phase === "sending"}>
                  {phase === "sending" ? <span className="spinner" aria-hidden="true" /> : <Send size={17} />}
                  {phase === "sending" ? "Sending…" : phase === "failed" ? "Try again" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
