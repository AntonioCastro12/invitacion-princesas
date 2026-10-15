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
    id: 'rapunzel',
    name: 'Rapunzel Bebé',
    title: 'Princesa de las Luces & Trenzas Doradas',
    color: '#c084fc',
    dressColor: 'from-purple-300 to-fuchsia-500',
    greeting: '¡Por fin veo la luz y será el día más emocionante y divertido de todos!',
    elementEmoji: '🌸',
    badge: 'Trenza Mágica',
  },
  {
    id: 'aurora',
    name: 'Aurora Bebé',
    title: 'Bella Durmiente Risueña',
    color: '#f472b6',
    dressColor: 'from-pink-300 to-rose-500',
    greeting: '¡Despierta a un día lleno de juegos, pasteles y polvos mágicos de hadas madrinas!',
    elementEmoji: '✨',
    badge: 'Corona de Hadas',
  },
  {
    id: 'ariel',
    name: 'Ariel Bebé',
    title: 'Sirenita Encantada',
    color: '#14b8a6',
    dressColor: 'from-teal-300 to-emerald-500',
    greeting: '¡En este hermoso castillo real la diversión nunca terminará! ¡A celebrar!',
    elementEmoji: '🌺',
    badge: 'Flor Marina',
  },
  {
    id: 'elsa',
    name: 'Elsa Bebé',
    title: 'Reina de las Nieves & Olaf',
    color: '#38bdf8',
    dressColor: 'from-sky-300 to-cyan-500',
    greeting: '¡Olaf y yo te enviamos abrazos calientitos y copos de nieve brillantes de felicidad!',
    elementEmoji: '❄️',
    badge: 'Muñeco Olaf',
  },
  {
    id: 'belle',
    name: 'Bella Bebé',
    title: 'Princesa de los Cuentos & Chip',
    color: '#eab308',
    dressColor: 'from-amber-200 to-yellow-500',
    greeting: '¡Chip y yo traemos tacitas de té encantado y deseos mágicos para tu cumpleaños!',
    elementEmoji: '☕',
    badge: 'Tacita Chip',
  },
  {
    id: 'mulan',
    name: 'Mulán Bebé',
    title: 'Guerrera Dulce & Mushu',
    color: '#e11d48',
    dressColor: 'from-rose-400 to-emerald-500',
    greeting: '¡Mushu y yo te deseamos la fiesta más valiente, alegre y mágica de todo el imperio!',
    elementEmoji: '🐉',
    badge: 'Dragón Guardián',
  },
  {
    id: 'anna',
    name: 'Anna Bebé',
    title: 'Princesa de Arendelle',
    color: '#0d9488',
    dressColor: 'from-teal-400 to-sky-600',
    greeting: '¡Por fin abrimos las grandes puertas del castillo para festejar un día inolvidable!',
    elementEmoji: '👑',
    badge: 'Corona Real',
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
