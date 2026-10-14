export interface ItineraryItem {
  time: string;
  title: string;
  desc: string;
  iconName?: string;
}

export interface InvitationData {
  celebrantName: string;
  celebrantAge: number;
  subtitle: string;
  storyMessage: string;
  dateText: string;
  timeText: string;
  eventDateIso: string; // ISO date for countdown: e.g. 2026-11-28T16:00:00
  venueName: string;
  venueAddress: string;
  googleMapsUrl: string;
  whatsappPhone: string; // E.g. 5215512345678 (country code + number, no spaces)
  dressCode: string;
  giftSuggestion: string;
  itinerary: ItineraryItem[];
  parentNames?: string;
  godparentNames?: string;
  customImageUrl?: string;
  layoutMode?: 'castle_center' | 'princesses_borders' | 'watercolor_romantic' | 'custom_uploaded';
}

export interface PrincessCharacter {
  id: string;
  name: string;
  title: string;
  color: string;
  dressColor: string;
  greeting: string;
  elementEmoji: string;
  badge: string;
}

export const PRINCESSES_DATA: PrincessCharacter[] = [
  {
    id: 'cinderella',
    name: 'Cenicienta Bebé',
    title: 'Dulcinea de los Sueños',
    color: '#38bdf8',
    dressColor: 'from-sky-300 to-blue-500',
    greeting: '¡Un sueño es un deseo de tu corazón! ¡Te deseo un cumpleaños mágico lleno de sonrisas!',
    elementEmoji: '🥿',
    badge: 'Zapatilla de Cristal',
  },
  {
    id: 'belle',
    name: 'Bella Bebé',
    title: 'Princesa de los Cuentos',
    color: '#eab308',
    dressColor: 'from-amber-200 to-yellow-500',
    greeting: '¡Qué gran aventura celebrar juntos! Que tu día sea tan dulce como una rosa mágica.',
    elementEmoji: '🌹',
    badge: 'Rosa Encantada',
  },
  {
    id: 'ariel',
    name: 'Ariel Bebé',
    title: 'Sirenita Encantada',
    color: '#14b8a6',
    dressColor: 'from-teal-300 to-emerald-500',
    greeting: '¡Bajo el mar y en este castillo la diversión nunca terminará! ¡A celebrar!',
    elementEmoji: '🧜‍♀️',
    badge: 'Concha Marina',
  },
  {
    id: 'aurora',
    name: 'Aurora Bebé',
    title: 'Bella Durmiente Risueña',
    color: '#ec4899',
    dressColor: 'from-pink-300 to-rose-500',
    greeting: '¡Despierta a un día lleno de juegos, pasteles y polvos mágicos de hadas madrinas!',
    elementEmoji: '✨',
    badge: 'Corona de Hadas',
  },
  {
    id: 'anna',
    name: 'Anna Bebé',
    title: 'Aventurera de Arendelle',
    color: '#0284c7',
    dressColor: 'from-teal-400 to-sky-600',
    greeting: '¡Por primera vez en años las puertas del castillo se abren para festejar en grande!',
    elementEmoji: '🌻',
    badge: 'Girasol de Nieve',
  },
];

export const DEFAULT_INVITATION: InvitationData = {
  celebrantName: 'Sofía Hernández',
  celebrantAge: 5,
  subtitle: 'Estás cordialmente invitado a mi fiesta de princesas',
  storyMessage: 'Había una vez, en un reino lleno de risas y colores, una dulce princesita que está por cumplir un año más de magia y aventuras...',
  dateText: 'Sábado, 28 de Noviembre de 2026',
  timeText: '4:00 PM',
  eventDateIso: '2026-11-28T16:00:00',
  venueName: 'Castillo Real "El Jardín de las Hadas"',
  venueAddress: 'Av. Paseo de las Flores #742, Col. Del Bosque',
  googleMapsUrl: 'https://maps.google.com/?q=Salon+Jardin+Infantil',
  whatsappPhone: '5215512345678',
  dressCode: 'Vestimenta de gala real o disfraz de tu princesa o príncipe favorito ✨',
  giftSuggestion: 'Tu presencia es el mayor regalo, pero si deseas tener un detalle: Lluvia de sobres o juguete sugerido 🎁',
  parentNames: 'Carlos & Mariana',
  godparentNames: 'Roberto & Elena',
  itinerary: [
    { time: '4:00 PM', title: 'Recepción Real', desc: 'Bienvenida con lluvia de burbujas, polvos de hadas y fotos en el carruaje real', iconName: 'sparkles' },
    { time: '5:00 PM', title: 'Entrada y Show de Princesas', desc: 'Aparición de las princesas del castillo, vals real y coronación especial', iconName: 'crown' },
    { time: '6:15 PM', title: 'Banquete de la Corte', desc: 'Bocadillos encantados, cupcakes de gala y deliciosas bebidas mágicas', iconName: 'utensils' },
    { time: '7:15 PM', title: 'Pastel Real y Piñata', desc: 'Las mañanitas junto a las princesas y la rotura del castillo de sorpresas', iconName: 'cake' },
    { time: '8:30 PM', title: 'Despedida con Recuerdos Mágicos', desc: 'Entrega de cofres dorados con sorpresas para todos nuestros pequeños invitados', iconName: 'gift' },
  ],
};
