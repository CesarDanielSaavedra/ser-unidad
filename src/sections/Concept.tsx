import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Isotype from '../components/decor/Isotype';
import { InfinityMark, TriangleMark } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';

const marks: Record<string, JSX.Element> = {
  asana: <Isotype className="h-12 w-12" />,
  infinity: <InfinityMark className="h-12 w-auto" />,
  elevation: <TriangleMark className="h-12 w-auto" />,
};

const Concept = () => {
  const { concept } = useContent();

  return (
    <section id="concepto" className="bg-cream py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={concept.eyebrow} title={concept.title} text={concept.text} align="center" />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {concept.items.map((item, i) => (
            <Reveal key={item.key} delay={i * 120} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 text-forest">
                {marks[item.key]}
              </div>
              <h3 className="mt-6 text-2xl text-forest">{item.title}</h3>
              <p className="label mt-2">{item.subtitle}</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest/75">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="hairline pt-8">
            <p className="label text-center">{concept.valuesLabel}</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
              {concept.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-forest/20 px-4 py-1.5 text-sm text-forest/80"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Concept;
