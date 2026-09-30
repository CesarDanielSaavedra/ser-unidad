import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Mandala from '../components/decor/Mandala';
import Isotype from '../components/decor/Isotype';
import { useContent } from '../hooks/useContent';
import { site } from '../content/site';

const About = () => {
  const { about } = useContent();
  const photo = site.aboutPhoto ? `${import.meta.env.BASE_URL}${site.aboutPhoto}` : null;

  return (
    <section id="sobre-sergio" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-t-full bg-sand lg:max-w-none">
              {photo ? (
                <img src={photo} alt={about.imageAlt} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gold/40">
                  <Mandala className="absolute inset-0 h-full w-full scale-125" />
                  <Isotype className="relative h-24 w-24 text-forest" />
                </div>
              )}
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} title={about.title} />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-forest/80 sm:text-lg">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 font-serif text-lg italic text-gold">{about.signature}</p>
            </Reveal>

            <Reveal className="mt-12" delay={100}>
              <p className="label">{about.trainingLabel}</p>
              <ol className="mt-4 divide-y divide-forest/10 border-y border-forest/10">
                {about.training.map((item, i) => (
                  <li key={item.title} className="flex gap-5 py-4">
                    <span className="w-6 shrink-0 font-serif text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="text-forest">{item.title}</span>
                      <span className="text-sm text-sage">{item.place}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
