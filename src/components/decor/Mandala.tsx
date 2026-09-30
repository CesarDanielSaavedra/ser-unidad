import type { SVGProps } from 'react';

type Ring = { inner: number; outer: number; count: number; width: number };

const rings: Ring[] = [
  { inner: 28, outer: 72, count: 12, width: 11 },
  { inner: 72, outer: 128, count: 18, width: 14 },
  { inner: 128, outer: 190, count: 24, width: 13 },
];

const petal = ({ inner, outer, width }: Ring) => {
  const mid = -(inner + outer) / 2;
  return `M0,${-inner} Q${width},${mid} 0,${-outer} Q${-width},${mid} 0,${-inner} Z`;
};

/**
 * Mandala en línea fina, generado por código.
 * Inspirado en la textura del manual de marca. Hereda el color del texto.
 */
const Mandala = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="-200 -200 400 400"
    fill="none"
    stroke="currentColor"
    strokeWidth={0.7}
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle r={12} />
    <circle r={20} strokeDasharray="1 3" strokeWidth={1.4} />
    <circle r={28} />
    <circle r={72} />
    <circle r={100} strokeDasharray="1.2 4" strokeWidth={1.6} />
    <circle r={128} />
    <circle r={160} strokeDasharray="1.2 4" strokeWidth={1.6} />
    <circle r={190} />
    <circle r={198} strokeWidth={0.4} />
    {rings.map((ring) => (
      <g key={ring.inner}>
        {Array.from({ length: ring.count }, (_, i) => (
          <g key={i} transform={`rotate(${(360 / ring.count) * i})`}>
            <path d={petal(ring)} />
            <path d={`M0,${-ring.inner - 4} L0,${-ring.outer + 6}`} strokeWidth={0.4} />
          </g>
        ))}
      </g>
    ))}
    {Array.from({ length: 36 }, (_, i) => (
      <g key={`dot-${i}`} transform={`rotate(${10 * i})`}>
        <circle cy={-145} r={1.2} fill="currentColor" stroke="none" />
        <path d="M0,-192 L0,-199" strokeWidth={0.5} />
      </g>
    ))}
  </svg>
);

export default Mandala;
