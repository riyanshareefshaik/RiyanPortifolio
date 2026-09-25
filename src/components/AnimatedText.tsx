import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible select-none pointer-events-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ wordBreak: 'break-word' }}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = charCounter;
        charCounter += word.length + 1; // including space

        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const globalIndex = startIndex + charIdx;
              // Smooth transition window per character
              const start = globalIndex / totalChars;
              const end = Math.min(1, (globalIndex + 2) / totalChars);

              return (
                <Char
                  key={`char-${wordIndex}-${charIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </p>
  );
};
