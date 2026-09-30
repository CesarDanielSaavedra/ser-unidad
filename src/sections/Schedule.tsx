import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { WhatsApp } from '../components/ui/icons';
import { useContent } from '../hooks/useContent';
import { privateSlot, schedule, site, type ActivityKey } from '../content/site';

/* Código de color por actividad, tomado de los flyers de horarios de la marca. */
const tone: Record<ActivityKey, string> = {
  yoga: 'bg-sky text-indigo',
  meditation: 'bg-mist text-forest',
  forest: 'bg-mist text-forest',
  gentle: 'bg-blush text-clay',
  residential: 'bg-sand text-gold-dark',
};

const Schedule = () => {
  const { schedule: content } = useContent();

  return (
    <section id="horarios" className="bg-ivory py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} text={content.text} />
        </Reveal>

        <Reveal className="mt-14" delay={100}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {schedule.map(({ day, slots }) => (
              <div key={day} className="flex flex-col gap-2 rounded-2xl bg-cream p-3 ring-1 ring-forest/5">
                <p className="label px-1 pb-1 pt-1 text-forest">{content.days[day]}</p>
                {slots.map((slot) => (
                  <div key={`${day}-${slot.time}`} className={`rounded-xl px-3 py-2.5 ${tone[slot.activity]}`}>
                    <p className="font-serif text-sm font-medium">{slot.time}</p>
                    <p className="mt-0.5 text-sm">{content.activities[slot.activity]}</p>
                    {slot.place && <p className="mt-0.5 text-xs opacity-70">{slot.place}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-sand px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-forest">{content.privateLabel}</p>
              <p className="text-sm text-forest/75">{content.privateText.replace('{time}', privateSlot.time)}</p>
            </div>
            <p className="text-xs text-sage">{content.disclaimer}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={150}>
          <Button
            variant="secondary"
            href={site.whatsapp(content.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsApp className="h-4 w-4" />}
          >
            {content.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
};

export default Schedule;
