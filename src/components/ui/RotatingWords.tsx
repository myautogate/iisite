import React from 'react';

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingWords({ words, interval = 2000, className = '' }: RotatingWordsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block min-w-[120px] transition-opacity duration-1000 ${className}`}>
      {words[currentIndex]}
    </span>
  );
}