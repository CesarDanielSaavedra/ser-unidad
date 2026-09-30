import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { Instagram } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';
import { spaces, zones } from '../content/site';

const Spaces = () => {
  const { spaces: content } = useContent();

  return (
    <section id="espacios" className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
            <p className="label mt-10">{content.zonesLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {zones.map((zone) => (
                <li key={zone} className="rounded-full bg-sand px-4 py-1.5 text-sm text-forest">
                  {zone}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <ul className="divide-y divide-forest/10 border-y border-forest/10">
              {spaces.map((space) => (
                <li key={space.name} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-serif text-lg text-forest">{space.name}</p>
                    <p className="text-sm text-sage">{space.zone}</p>
                  </div>
                  <a
                    href={`https://www.instagram.com/${space.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${space.name} en Instagram`}
                    className="rounded-full p-2 text-forest/60 transition-colors hover:text-gold"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Spaces;
