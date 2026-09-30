import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const line = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export const ArrowRight = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M4 12h16M13 5l7 7-7 7" />
  </svg>
);

export const ArrowDown = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M12 4v16M5 13l7 7 7-7" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Pin = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Phone = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const WhatsApp = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.2 4.3c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.5-.4-.4-.6-.4h-.5z" />
  </svg>
);

export const Instagram = (props: IconProps) => (
  <svg {...line(props)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

/* Marcas del concepto (manual de marca, página "Concepto") */

export const InfinityMark = (props: IconProps) => (
  <svg viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true" {...props}>
    <path d="M32 16c-6-8-12-12-19-12S2 8 2 16s5 12 11 12 13-4 19-12c6-8 12-12 19-12s11 4 11 12-5 12-11 12-13-4-19-12z" />
  </svg>
);

export const TriangleMark = (props: IconProps) => (
  <svg viewBox="0 0 64 56" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M32 3 61 53H3z" />
  </svg>
);

/* Íconos de servicios, en línea fina */

export const Lotus = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M12 20c-3-2-4.5-5-4.5-8.5C7.5 8 9.5 5.5 12 4c2.5 1.5 4.5 4 4.5 7.5S15 18 12 20z" />
    <path d="M12 20c-4 0-7.5-2-9-5.5 2.5-.5 4.5 0 6 1M12 20c4 0 7.5-2 9-5.5-2.5-.5-4.5 0-6 1" />
  </svg>
);

export const Book = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M12 6.5C10.5 5 8.2 4.5 4 4.5v13c4.2 0 6.5.5 8 2 1.5-1.5 3.8-2 8-2v-13c-4.2 0-6.5.5-8 2z" />
    <path d="M12 6.5v13" />
  </svg>
);

export const Person = (props: IconProps) => (
  <svg {...line(props)}>
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
);

export const Tree = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M12 3 6.5 11h3L5.5 17h13l-4-6h3z" />
    <path d="M12 17v4" />
  </svg>
);

export const Mountains = (props: IconProps) => (
  <svg {...line(props)}>
    <path d="M3 19 9 8l4 7 2-3 6 7z" />
    <circle cx="17.5" cy="6" r="1.8" />
  </svg>
);
