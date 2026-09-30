import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream';

const variants: Record<Variant, string> = {
  primary: 'bg-gold px-6 py-3 text-ivory hover:bg-forest',
  secondary: 'border border-forest/40 px-6 py-3 text-forest hover:border-forest hover:bg-forest hover:text-ivory',
  ghost: 'px-1 py-1 text-forest underline-offset-4 hover:text-gold hover:underline',
  onDark: 'bg-sand px-6 py-3 text-forest-deep hover:bg-gold hover:text-ivory',
};

/** Botón con forma de enlace. Todas las acciones del sitio llevan a un ancla o a WhatsApp. */
const Button = ({ variant = 'primary', className = '', children, icon, ...rest }: ButtonProps) => (
  <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
    {icon}
    <span>{children}</span>
  </a>
);

export default Button;
