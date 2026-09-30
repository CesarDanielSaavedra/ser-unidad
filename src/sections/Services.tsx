import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Isotype from '../components/decor/Isotype';
import { ArrowRight, Book, Lotus, Mountains, Person, Tree } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';
import { site } from '../content/site';

const icons: Record<string, JSX.Element> = {
  yoga: <Isotype className="h-7 w-7" />,
  meditation: <Lotus className="h-7 w-7" />,
  philosophy: <Book className="h-7 w-7" />,
  private: <Person className="h-7 w-7" />,
  forest: <Tree className="h-7 w-7" />,
  retreats: <Mountains className="h-7 w-7" />,
};

const Services = () => {
  const { services } = useContent();

  return (
    <section id="propuesta" className="bg-sand py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={services.eyebrow} title={services.title} text={services.text} />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.key} delay={(i % 3) * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl bg-ivory p-7 ring-1 ring-forest/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest/10">
                <div className="text-gold">{icons[item.key]}</div>
                <p className="mt-6 text-xs text-sage">{item.meta}</p>
                <h3 className="mt-2 text-xl text-forest">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/75">{item.text}</p>
                <a
                  href={site.whatsapp(`${services.whatsappPrefix}${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-forest transition-colors group-hover:text-gold"
                >
                  {services.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
