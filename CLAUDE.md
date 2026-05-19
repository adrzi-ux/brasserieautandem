# CLAUDE.md — brasserieautandem.fr

## Statut
✓ **ACHETÉ le 2026-05-19** — premier batch du projet remontage expired.

## Contexte
- **Activité originale** : "Brasserie Au Tandem" (restaurant/brasserie)
- **Localisation devinée** : Provence — autour de Lauris / La Roque-d'Anthéron (vu les BL)
- **Dernière activité Wayback** : 2022
- **Niche cible rebuild** : HORECA / Restauration / Tourisme Provence

## Métriques (au moment de l'achat)
| Source | Métrique | Valeur |
|---|---|---|
| Majestic | TF / RD / DoFollow RD | 16 / 39 / 24 |
| Ahrefs | AR / RD Fol / Diversité | 32M / 24 / 0.49 |
| Ahrefs | Trafic organique | 0 |

## Backlinks d'autorité à préserver

| Domaine | DR | Trafic | Pourquoi qualité |
|---|---|---|---|
| **festival-piano.com** | 58 | 1 544 | Festival International de Piano La Roque-d'Anthéron (autorité culturelle) |
| **laroquedantheron-tourisme.fr** | 33 | 3 624 | Office du tourisme officiel La Roque-d'Anthéron |
| **mymenuweb.com** | 38 | 1 319 | Plateforme menus/restaurants (niche HORECA alignée) |

→ **3 autorités fortes** dont 1 OT officiel + 1 festival international = jackpot Provence.

## Plan rebuild

### Étape 1 — Récup Wayback (2022)
- [ ] Snapshot le plus récent (probablement 2021-2022)
- [ ] Récupérer : menu, carte des vins, page contact, photos, blog si existant
- [ ] **Décision stratégique** : rebuild en "vraie brasserie" (avec menus fictifs cohérents) OU en "guide restauration locale" ?

### Étape 2 — Setup tech
- [ ] VPS + DNS + LEMP + WP
- [ ] Variables :
  ```
  DOMAIN=brasserieautandem.fr
  VPS_IP=
  WP_PATH=/var/www/brasserieautandem
  ```

### Étape 3 — Content (orientations possibles)

**Option A — Brasserie "fictive" cohérente** (plus simple, rebuild fidèle)
- Page menu (entrée/plat/dessert + vins)
- Page brunch / formule midi
- Galerie photos (libres de droits cuisine provençale)
- Histoire de la brasserie
- Adresse fictive crédible (autour de Lauris/La Roque-d'Anthéron)

**Option B — Guide gastronomique régional** (plus large, plus de potentiel)
- Top restaurants Luberon
- Reviews brasseries Provence
- Guide vins du Luberon (cohérent BL viticulture)
- Recettes provençales
- Festivals/événements gastronomiques (Festival Piano = lien naturel)
- Tourisme food Provence

→ **Recommandation : Option B** (plus de volume éditorial, meilleur ROI vente de liens).

### Étape 4 — Clients potentiels
- Tour-opérateurs Provence / Luberon
- Hôtels et B&B région
- Caves viticoles locales (Côtes du Luberon, AOC)
- Plateformes resto (TheFork, MyMenuWeb, Tripadvisor)
- Cours de cuisine / chefs / ateliers gastronomie
- Équipementiers restauration
- Producteurs locaux (huile olive, fromages, charcuterie)

**ROI estimé** : 8-15 BL/mois × 40-100€ = 320-1500€/mois récurrent.

## Voir aussi
- Process général : `../remontage/CLAUDE.md`
- Stack tech : `../site-template/CLAUDE.md`
- Dashboard analyse : `../domaines/index.html`
