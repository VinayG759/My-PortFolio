import { useState, useEffect } from 'react';

export function useTypewriter(texts: string[], speed = 80, pause = 2200) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      const t = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    if (!isDeleting && charIndex === currentText.length) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, speed / 2.5);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
}
