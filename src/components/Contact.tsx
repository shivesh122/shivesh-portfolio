import { useState, type ChangeEvent, type FormEvent } from "react";
import { Download, Linkedin, Mail, MapPin, Phone, Send } from "@/components/icons";
import { profile } from "@/data/portfolio";

type Status = { kind: "ok" | "err"; text: string } | null;

const EMAILJS = { service: "service_3iakb9i", template: "template_sqct42c", publicKey: "dkUnx6eA5mOjVX9DZ" };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ kind: "err", text: "Please fill in all fields." });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      // EmailJS is only downloaded when someone actually sends a message
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: profile.email },
        EMAILJS.publicKey,
      );
      setStatus({ kind: "ok", text: "Thanks! Your message has been sent. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email sending failed:", err);
      setStatus({ kind: "err", text: `Sorry, the message couldn't be sent. Please email me at ${profile.email}.` });
    } finally {
      setSending(false);
    }
  };

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

            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" value={form.name} onChange={onChange} placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell me about the role or project…" required />
              </div>
              {status && (
                <p className={`form-status ${status.kind}`} role={status.kind === "err" ? "alert" : "status"}>
                  {status.text}
                </p>
              )}
              <button className="btn btn-primary" type="submit" disabled={sending}>
                <Send size={17} /> {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
