import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { Instagram, Phone, Pin, WhatsApp } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';
import { site } from '../content/site';

const Contact = () => {
  const { contact } = useContent();

  return (
    <section id="contacto" className="bg-sand py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} align="center" />
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4" delay={100}>
          <Button
            href={site.whatsapp(contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsApp className="h-4 w-4" />}
          >
            {contact.whatsapp}
          </Button>
          <Button
            variant="secondary"
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Instagram className="h-4 w-4" />}
          >
            {contact.instagram}
          </Button>
        </Reveal>

        <Reveal className="mt-14" delay={150}>
          <dl className="mx-auto grid max-w-2xl gap-6 border-t border-forest/15 pt-8 text-center sm:grid-cols-2">
            <div>
              <dt className="label inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> {contact.phoneLabel}
              </dt>
              <dd className="mt-2 font-serif text-xl text-forest">{site.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="label inline-flex items-center gap-2">
                <Pin className="h-3.5 w-3.5" /> {contact.areaLabel}
              </dt>
              <dd className="mt-2 font-serif text-xl text-forest">{contact.area}</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
};

export default Contact;
