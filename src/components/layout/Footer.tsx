import Container from '../ui/Container';
import Isotype from '../decor/Isotype';
import { Instagram, WhatsApp } from '../ui/icons';
import { useContent } from '../../hooks/useContent';
import { site } from '../../content/site';

const Footer = () => {
  const { nav, footer } = useContent();
  const year = new Date().getFullYear();

  const links = [
    { href: '#propuesta', label: nav.services },
    { href: '#sobre-sergio', label: nav.about },
    { href: '#horarios', label: nav.schedule },
    { href: '#contacto', label: nav.contact },
  ];

  return (
    <footer className="bg-forest-deep text-sand">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Isotype className="h-12 w-12 text-sand" />
            <p className="mt-5 font-serif text-2xl text-ivory">ser unidad</p>
            <p className="mt-2 text-sm leading-relaxed text-sand/70">{footer.tagline}</p>
          </div>

          <nav className="flex flex-col gap-3 text-sm" aria-label="Pie de página">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sand/80 transition-colors hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={site.whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sand/80 transition-colors hover:text-gold"
            >
              <WhatsApp className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sand/80 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" /> {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand/15 pt-6 text-xs text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.owner}. {footer.rights}
          </p>
          <p className="font-serif italic text-sand/70">{footer.closing}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
