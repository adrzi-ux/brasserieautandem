// Data partagée du site Brasserie Au Tandem

export type Category = {
  icon: 'olive' | 'wheat' | 'sun' | 'glass';
  title: string;
  count: number;
  href: string;
};

export type Recipe = {
  tag: string;
  title: string;
  time: string;
  diff: string;
  tone: 'warm' | 'olive' | 'cocoa' | 'sand' | 'lav' | 'rose';
  num: string;
};

export type Producer = {
  name: string;
  role: string;
  village: string;
  tone: 'warm' | 'olive' | 'cocoa' | 'sand' | 'lav' | 'rose';
  x?: string;
  y?: string;
};

export type Pairing = {
  dish: string;
  wine: string;
  region: string;
  note: string;
};

export const CATEGORIES: Category[] = [
  { icon: 'olive', title: 'Recettes provençales', count: 24, href: '/recettes-provencales/' },
  { icon: 'wheat', title: 'Méditerranéennes',     count: 18, href: '/recettes-mediterraneennes/' },
  { icon: 'sun',   title: 'Saisonnières',         count: 32, href: '/recettes-saisonnieres/' },
  { icon: 'glass', title: 'Accords mets-vins',    count: 12, href: '/accords-mets-vins/' },
];

export const FEATURED_RECIPES: Recipe[] = [
  { tag: 'Provençal',    title: 'Aïoli traditionnel',         time: '1h',    diff: 'Facile',      tone: 'warm',  num: '01' },
  { tag: 'Provençal',    title: 'Daube avignonnaise',         time: '3h30',  diff: 'Moyen',       tone: 'cocoa', num: '02' },
  { tag: 'Été',          title: 'Tian de légumes du soleil',  time: '1h15',  diff: 'Facile',      tone: 'olive', num: '03' },
  { tag: 'Méditerranée', title: 'Soupe au pistou',            time: '1h45',  diff: 'Facile',      tone: 'rose',  num: '04' },
  { tag: 'Apéro',        title: 'Tapenade noire d\'Aups',     time: '20min', diff: 'Très facile', tone: 'sand',  num: '05' },
  { tag: 'Provençal',    title: 'Pissaladière de Nice',       time: '2h',    diff: 'Moyen',       tone: 'lav',   num: '06' },
];

export const PRODUCERS: Producer[] = [
  { name: 'Jean Bertaud',    role: 'Huile d\'olive AOP',   village: 'Cucuron',    tone: 'olive' },
  { name: 'Maryse Ferrand',  role: 'Chèvres fermiers',     village: 'Vaugines',   tone: 'warm' },
  { name: 'Domaine Reibaud', role: 'Vigneron biologique',  village: 'Lourmarin',  tone: 'rose' },
  { name: 'Famille Sicard',  role: 'Herbes du Luberon',    village: 'Pertuis',    tone: 'lav' },
];

export const PAIRINGS: Pairing[] = [
  { dish: 'Aïoli traditionnel',  wine: 'Bandol blanc',       region: 'Bandol AOP',     note: 'Clairette et bourboulenc — droit, salin, taillé pour la morue.' },
  { dish: 'Daube avignonnaise',  wine: 'Côtes-du-Rhône',     region: 'Vacqueyras',     note: 'Grenache mature, fruit noir et garrigue ; tient la longue cuisson.' },
  { dish: 'Tian de légumes',     wine: 'Coteaux d\'Aix rosé',region: 'Coteaux d\'Aix', note: 'Fraîcheur et finale herbacée, sans dominer les légumes confits.' },
  { dish: 'Soupe au pistou',     wine: 'Cassis blanc',       region: 'Cassis AOP',     note: 'Marsanne et clairette, un nez d\'anis qui répond au basilic.' },
  { dish: 'Pissaladière',        wine: 'Bellet rouge',       region: 'Bellet AOP',     note: 'Folle noire, léger et épicé ; équilibre l\'oignon confit et l\'anchois.' },
];

export const SITE = {
  name: 'Brasserie Au Tandem',
  tagline: 'Brasserie · Provence',
  description: 'Guide gastronomie & recettes provençales. Les coulisses d\'une brasserie de village au cœur de la Provence.',
  url: 'https://brasserieautandem.fr',
  address: {
    street: 'Place du Cours',
    city: 'Saint-Cannat',
    zip: '13760',
    region: 'Bouches-du-Rhône',
  },
  email: 'contact@brasserieautandem.fr',
  instagram: '@brasserieautandem',
};
