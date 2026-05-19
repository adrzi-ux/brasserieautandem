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

### ✅ Étape 1 — Récup Wayback (FAIT 2026-05-19)
5 URLs capturées en 2022 (voir `wayback/brasserieautandem.fr-wayback-urls.tsv`) :
- `https://brasserieautandem.fr/` (home)
- `https://brasserieautandem.fr/diaporama/` (galerie photos)
- `https://brasserieautandem.fr/notre-carte/` (menu)
- `https://brasserieautandem.fr/mentions-legales/`
- `https://brasserieautandem.fr/politique-de-cookies-ue/`

### ✅ Étape 2 — Cross-ref Ahrefs Pages (FAIT 2026-05-19)
**La home concentre 100% du jus SEO :**

| URL | RD | DoF | Top DR | Tier |
|---|---|---|---|---|
| https://brasserieautandem.fr/ | **103** | **86** | **93** | **TIER 1** |
| http://brasserieautandem.fr/ | 7 | 6 | 52 | (merge HTTPS) |
| autres pages | 0 | 0 | - | TIER 2 (continuité Wizards) |

→ Top DR 93 = très probablement `festival-piano.com` (DR 58 vu en Site Explorer, peut-être autre BL fort)

### Étape 3 — Décision stratégique
**Option A — Brasserie "fidèle"** : rebuild proche du site original (carte/diaporama/mentions/cookies) → simple, rapide
**Option B — Guide gastronomique régional** : élargir la niche pour plus de volume éditorial → plus de potentiel vente de liens

→ **Recommandation : commencer par A puis évoluer vers B** (continuité Wizards d'abord, élargissement après indexation à 30j).

### Étape 4 — Setup tech (à venir)
- [ ] DNS + VPS + LEMP + WP
- [ ] **Permalink Manager** pour slugs exacts
- [ ] Variables :
  ```
  DOMAIN=brasserieautandem.fr
  VPS_IP=
  WP_PATH=/var/www/brasserieautandem
  ```

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
