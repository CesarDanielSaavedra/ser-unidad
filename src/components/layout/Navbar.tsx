import { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Close, Menu, WhatsApp } from '../ui/icons';
import { useContent } from '../../hooks/useContent';
import { useLanguage } from '../../hooks/useLanguage';
import { site } from '../../content/site';

const LOGO = `${import.meta.env.BASE_URL}assets/icons/logo_ser_unidad.svg`;

const Navbar = () => {
  const { nav, hero } = useContent();
  const { toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#concepto', label: nav.concept },
    { href: '#propuesta', label: nav.services },
    { href: '#sobre-sergio', label: nav.about },
    { href: '#horarios', label: nav.schedule },
    { href: '#espacios', label: nav.spaces },
    { href: '#contacto', label: nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* El blur va en un hijo: backdrop-filter en el header rompería el position: fixed del menú móvil. */}
      <div
        className={`transition-colors duration-300 ${
          solid ? 'border-b border-forest/10 bg-sand/90 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <a href="#inicio" className="shrink-0" aria-label="Ser Unidad">
            <img src={LOGO} alt="Ser Unidad" className="h-11 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-forest transition-colors hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={nav.switchLanguage}
              className="rounded-full border border-forest/30 px-3 py-1.5 font-sans text-[0.7rem] uppercase tracking-label text-forest transition-colors hover:border-gold hover:text-gold"
            >
              {nav.languageShort}
            </button>
            <Button
              href={site.whatsapp(hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden !px-5 !py-2.5 md:inline-flex"
              icon={<WhatsApp className="h-4 w-4" />}
            >
              {nav.cta}
            </Button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.close : nav.menu}
              className="rounded-full p-2 text-forest transition-colors hover:text-gold lg:hidden"
            >
              {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 z-30 bg-sand transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <Container className="flex h-full flex-col justify-between py-10">
          <nav className="flex flex-col gap-2" aria-label="Principal móvil">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? 60 + i * 40 : 0}ms` }}
                className={`border-b border-forest/10 py-4 font-serif text-3xl text-forest transition-all duration-500 hover:text-gold ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            href={site.whatsapp(hero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsApp className="h-4 w-4" />}
            className="w-full"
          >
            {nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
