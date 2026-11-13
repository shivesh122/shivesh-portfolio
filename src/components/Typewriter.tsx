import { useEffect, useState } from "react";

/** Types, holds, deletes and cycles through words. Decorative: pair it with sr-only text. */
const Typewriter = ({ words }: { words: readonly string[] }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[i];
    let delay = deleting ? 38 : 70;
    let next: () => void;

    if (!deleting && text === word) {
      delay = 1900;
      next = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = 250;
      next = () => {
        setDeleting(false);
        setI((n) => (n + 1) % words.length);
      };
    } else {
      next = () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }
    const t = window.setTimeout(next, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="typer" aria-hidden="true">
      <span className="grad-text">{text}</span>
      <span className="caret" />
    </span>
  );
};

export default Typewriter;
