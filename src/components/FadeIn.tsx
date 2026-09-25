import React, { ElementType, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  style,
}) => {
  // Use motion.create or motion[as] for element types
  const Component = (motion as unknown as Record<string, React.ComponentType<MotionProps & { className?: string; style?: React.CSSProperties; children?: ReactNode }>>)[as as string] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};
