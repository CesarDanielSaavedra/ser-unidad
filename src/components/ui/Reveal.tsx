import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Aparición suave al entrar en pantalla. Se desactiva con prefers-reduced-motion. */
const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
