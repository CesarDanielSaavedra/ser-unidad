import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import Mandala from '../components/decor/Mandala';
import { useContent } from '../hooks/useContent';

const Quote = () => {
  const { quote } = useContent();

  return (
    <section className="relative overflow-hidden bg-forest py-28 text-ivory lg:py-40">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 animate-drift text-sage/40 motion-reduce:animate-none" />
      <Container className="relative">
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-3xl leading-[1.2] sm:text-4xl md:text-5xl">
              <span className="text-gold">“</span>
              {quote.text}
              <span className="text-gold">”</span>
            </p>
            <footer className="label mt-8 text-sand/80">{quote.author}</footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
};

export default Quote;
