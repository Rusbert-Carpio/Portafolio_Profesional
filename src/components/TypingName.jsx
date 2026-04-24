import { useEffect, useState } from 'react';

export default function TypingName({ text }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timer = setTimeout(() => {
        setDisplay(text.slice(0, index));
        setIndex((current) => current + 1);
      }, index === 0 ? 350 : 90);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <span className="typing-name">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
}
