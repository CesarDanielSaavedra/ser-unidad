type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  id?: string;
};

const SectionHeading = ({ eyebrow, title, text, align = 'left', tone = 'light', id }: SectionHeadingProps) => {
  const centered = align === 'center';
  const titleColor = tone === 'dark' ? 'text-ivory' : 'text-forest';
  const textColor = tone === 'dark' ? 'text-sand/80' : 'text-forest/75';
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="label">{eyebrow}</p>
      <h2 id={id} className={`mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 max-w-measure text-base leading-relaxed sm:text-lg ${textColor} ${centered ? 'mx-auto' : ''}`}>{text}</p>}
    </div>
  );
};

export default SectionHeading;
