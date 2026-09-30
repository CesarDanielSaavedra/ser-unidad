import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Mandala from '../components/decor/Mandala';
import Isotype from '../components/decor/Isotype';
import { ArrowRight, Pin, WhatsApp } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';
import { site } from '../content/site';

const IMAGE = `${import.meta.env.BASE_URL}assets/images/orilla.jpg`;

const Hero = () => {
  const { hero } = useContent();

  return (
    <section id="inicio" className="relative overflow-hidden bg-sand pb-20 pt-32 lg:pb-28 lg:pt-40">
      <Mandala className="pointer-events-none absolute -right-48 -top-48 h-[40rem] w-[40rem] animate-drift text-gold/30 motion-reduce:animate-none lg:-right-32 lg:-top-40 lg:h-[60rem] lg:w-[60rem]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="label">{hero.eyebrow}</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-forest sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-measure text-base leading-relaxed text-forest/80 sm:text-lg">{hero.text}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button
                href={site.whatsapp(hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                icon={<WhatsApp className="h-4 w-4" />}
              >
                {hero.primary}
              </Button>
              <Button variant="ghost" href="#horarios">
                {hero.secondary}
                <ArrowRight className="ml-1 inline h-4 w-4" />
              </Button>
            </div>

            <p className="mt-10 inline-flex items-center gap-2 text-sm text-sage">
              <Pin className="h-4 w-4" />
              {hero.location}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold/50" aria-hidden="true" />
            <figure className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <img src={IMAGE} alt={hero.imageAlt} className="h-full w-full object-cover" loading="eager" />
            </figure>
            <div className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full bg-cream shadow-md">
              <Isotype className="h-10 w-10 text-gold" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
