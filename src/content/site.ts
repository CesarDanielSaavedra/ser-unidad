/**
 * Datos del negocio que no se traducen: contacto, horarios, espacios.
 * Fuente: admin doc/instagram/relevamiento-instagram.md (relevado 30/09/2026).
 * Los horarios salen del destacado "Días y Horarios" de Instagram (mediados de 2025).
 * Pendiente: confirmar vigencia con Sergio.
 */

export type ActivityKey = 'yoga' | 'meditation' | 'gentle' | 'residential' | 'forest';
export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

export type Slot = {
  time: string;
  activity: ActivityKey;
  place?: string;
};

const PHONE_RAW = '59897307096';

export const site = {
  name: 'Ser Unidad',
  owner: 'Sergio Montagner',
  phoneDisplay: '+598 97 307 096',
  phoneRaw: PHONE_RAW,
  instagramHandle: '@ser.unidad',
  instagramUrl: 'https://www.instagram.com/ser.unidad/',
  /** Foto para la sección "Sobre Sergio". Pendiente de fotos originales; null usa un panel decorativo. */
  aboutPhoto: null as string | null,
  whatsapp: (message?: string) =>
    `https://wa.me/${PHONE_RAW}${message ? `?text=${encodeURIComponent(message)}` : ''}`,
};

export const schedule: { day: DayKey; slots: Slot[] }[] = [
  {
    day: 'mon',
    slots: [
      { time: '9:00 – 10:15', activity: 'yoga', place: 'Pinares' },
      { time: '11:00 – 12:15', activity: 'yoga', place: 'Punta del Este' },
      { time: '18:00 – 19:30', activity: 'yoga', place: 'Maldonado Centro' },
      { time: '20:00 – 21:00', activity: 'meditation', place: 'Maldonado Centro' },
    ],
  },
  {
    day: 'tue',
    slots: [{ time: '18:15 – 19:15', activity: 'yoga', place: 'San Rafael' }],
  },
  {
    day: 'wed',
    slots: [
      { time: '11:00 – 12:15', activity: 'yoga', place: 'Punta del Este' },
      { time: '18:00 – 19:30', activity: 'yoga', place: 'Maldonado Centro' },
    ],
  },
  {
    day: 'thu',
    slots: [
      { time: '9:00 – 10:15', activity: 'yoga', place: 'Pinares' },
      { time: '18:15 – 19:15', activity: 'yoga', place: 'San Rafael' },
    ],
  },
  {
    day: 'fri',
    slots: [
      { time: '9:00 – 10:00', activity: 'meditation', place: 'Pinares' },
      { time: '17:00 – 18:30', activity: 'residential' },
    ],
  },
  {
    day: 'sat',
    slots: [
      { time: '10:00 – 11:15', activity: 'gentle', place: 'Club del Bosque, PDE' },
      { time: '16:00 – 17:00', activity: 'forest' },
    ],
  },
];

export const privateSlot = { time: '16:00 – 17:30' };

export const spaces = [
  { name: 'Cocrearte', zone: 'Maldonado', instagram: 'cocre.arte' },
  { name: 'Club del Bosque', zone: 'Punta del Este', instagram: 'clubdelbosquepde' },
  { name: 'Espacio Cairú', zone: 'Camino a la Laguna, parada 34', instagram: 'cairu.maldonado' },
  { name: 'Lighthouse Cowork', zone: 'Maldonado', instagram: 'lighthouse_cowork' },
  { name: 'Indra', zone: 'Gorlero y 19, Punta del Este', instagram: 'indra_puntadeleste' },
  { name: 'Saraswati Yoga Studio', zone: 'Maldonado', instagram: 'saraswati_yogastudio' },
  { name: 'Espacio Anam', zone: 'Maldonado', instagram: 'espacioanam' },
  { name: 'Fundación Tenis Uruguay', zone: 'Maldonado', instagram: 'fundaciontenisuruguay_' },
];

export const zones = ['Pinares', 'Punta del Este', 'Maldonado Centro', 'San Rafael'];
