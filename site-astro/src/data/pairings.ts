// Accords mets-vins — toutes les paires plat/vin

export type Pairing = {
  dish: string;
  wine: string;
  region: string;
  note: string;
};

export const PAIRINGS_ROUGES: Pairing[] = [
  { dish: 'Daube avignonnaise', wine: 'Vacqueyras',   region: 'Côtes-du-Rhône', note: 'Grenache mature, garrigue, tient la longue cuisson.' },
  { dish: 'Pieds-paquets',      wine: 'Gigondas',     region: 'Côtes-du-Rhône', note: 'Tannin présent, fruit noir, pour la richesse du plat.' },
  { dish: 'Pissaladière',       wine: 'Bellet rouge', region: 'Bellet AOP',     note: 'Folle noire, léger ; équilibre oignon confit et anchois.' },
  { dish: 'Agneau de Sisteron', wine: 'Bandol rouge', region: 'Bandol AOP',     note: "Mourvèdre dominant, structure idéale pour l'agneau rôti." },
];

export const PAIRINGS_ROSES: Pairing[] = [
  { dish: 'Tian de légumes',       wine: "Coteaux d'Aix rosé", region: "Coteaux d'Aix",     note: 'Fraîcheur et finale herbacée, sans dominer.' },
  { dish: 'Mesclun & chèvre frais',wine: 'Côtes de Provence',  region: 'Côtes de Provence', note: 'Le rosé pâle classique, miellé en finale.' },
  { dish: 'Tapenade & pan-bagnat', wine: 'Tavel',              region: 'Tavel AOP',         note: "Rosé corsé qui tient l'olive noire et l'anchois." },
];

export const PAIRINGS_BLANCS: Pairing[] = [
  { dish: 'Aïoli traditionnel', wine: 'Bandol blanc',   region: 'Bandol AOP',  note: 'Clairette, bourboulenc — droit, salin, taillé pour la morue.' },
  { dish: 'Soupe au pistou',    wine: 'Cassis blanc',   region: 'Cassis AOP',  note: "Nez d'anis qui répond au basilic." },
  { dish: 'Bouillabaisse',      wine: 'Cassis blanc',   region: 'Cassis AOP',  note: 'Marsanne et clairette, salinité méditerranéenne.' },
  { dish: 'Brandade nîmoise',   wine: 'Coteaux du Pic', region: 'Languedoc',   note: "Roussanne ; soutient le gras de la morue à l'huile." },
];

export const ALL_PAIRINGS = [...PAIRINGS_ROUGES, ...PAIRINGS_ROSES, ...PAIRINGS_BLANCS];

// 5 accords featured pour la home (depuis ALL_PAIRINGS)
export const FEATURED_PAIRINGS: Pairing[] = [
  PAIRINGS_BLANCS[0],   // Aïoli traditionnel
  PAIRINGS_ROUGES[0],   // Daube avignonnaise
  PAIRINGS_ROSES[0],    // Tian de légumes
  PAIRINGS_BLANCS[1],   // Soupe au pistou
  PAIRINGS_ROUGES[2],   // Pissaladière
];
