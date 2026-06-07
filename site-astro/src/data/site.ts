// Data partagée du site Brasserie Au Tandem
import { RECIPES } from './recipes';
import { ALL_PAIRINGS } from './pairings';

export type Category = {
  icon: 'olive' | 'wheat' | 'sun' | 'glass';
  title: string;
  count: number;
  href: string;
};

export type Producer = {
  name: string;
  role: string;
  village: string;
  tone: 'warm' | 'olive' | 'cocoa' | 'sand' | 'lav' | 'rose';
  x?: string;
  y?: string;
};

// Re-export Pairing depuis pairings.ts pour rétro-compat
export type { Pairing } from './pairings';
export { ALL_PAIRINGS as PAIRINGS, FEATURED_PAIRINGS } from './pairings';

// Compteurs dynamiques basés sur RECIPES + ALL_PAIRINGS
const countByCategory = (cat: 'provencales' | 'mediterraneennes' | 'saisonnieres'): number =>
  RECIPES.filter(r => r.category === cat).length;

export const CATEGORIES: Category[] = [
  { icon: 'olive', title: 'Recettes provençales', count: countByCategory('provencales'),     href: '/recettes-provencales/' },
  { icon: 'wheat', title: 'Méditerranéennes',     count: countByCategory('mediterraneennes'), href: '/recettes-mediterraneennes/' },
  { icon: 'sun',   title: 'Saisonnières',         count: countByCategory('saisonnieres'),    href: '/recettes-saisonnieres/' },
  { icon: 'glass', title: 'Accords mets-vins',    count: ALL_PAIRINGS.length,                 href: '/accords-mets-vins/' },
];

export const PRODUCERS: Producer[] = [
  { name: 'Jean Bertaud',    role: 'Huile d\'olive AOP',   village: 'Cucuron',    tone: 'olive' },
  { name: 'Maryse Ferrand',  role: 'Chèvres fermiers',     village: 'Vaugines',   tone: 'warm' },
  { name: 'Domaine Reibaud', role: 'Vigneron biologique',  village: 'Lourmarin',  tone: 'rose' },
  { name: 'Famille Sicard',  role: 'Herbes du Luberon',    village: 'Pertuis',    tone: 'lav' },
];

export const SITE = {
  name: 'Brasserie Au Tandem',
  tagline: 'Brasserie · Provence',
  description: 'Guide gastronomie & recettes provençales. Les coulisses d\'une brasserie de village au cœur de la Provence.',
  url: 'https://www.brasserieautandem.fr',
  address: {
    street: 'Place du Cours',
    city: 'Saint-Cannat',
    zip: '13760',
    region: 'Bouches-du-Rhône',
  },
  email: 'contact@brasserieautandem.fr',
  instagram: '@brasserieautandem',
};
