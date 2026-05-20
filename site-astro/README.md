# brasserieautandem.fr — Site Astro

Site statique Astro pour `brasserieautandem.fr` — guide gastronomie & recettes provençales.

## Source du design

Bundle Claude Design (`claude.ai/design`) fetché depuis l'API Anthropic le 2026-05-20.

- Direction : éditoriale chaude, italiques XXL, cachets bistro
- Typo : Cormorant Garamond + Inter + JetBrains Mono (Google Fonts)
- Palette : terracotta (`#C77B30`), olive (`#7A8450`), lavande (`#9B7DB9`), crème (`#F5EFE0`), brun (`#3D2817`)
- CSS du designer copié tel quel dans `src/styles/global.css` (1248 lignes) — système solide, pas de Tailwind ajouté par-dessus

## Stack

- **Astro 5** (static output, trailing slash)
- **TypeScript** pour les data
- **CSS** vanilla custom (pas de framework CSS)
- **Google Fonts** via `<link>` dans le layout

## Structure

```
src/
├── layouts/
│   └── Site.astro          # HTML shell + meta + Header/Footer
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Newsletter.astro
│   ├── CTABanner.astro
│   ├── RecipeCard.astro
│   ├── CategoryCard.astro
│   ├── ProducerCard.astro
│   ├── CategoryHero.astro   # FB hero pour pages catégorie
│   ├── Stamp.astro          # Cachet bistro SVG (cercle + texte sur path)
│   ├── Placeholder.astro    # Image stand-in (à remplacer par photos)
│   └── Icon.astro           # Set d'icônes minimaliste
├── pages/
│   ├── index.astro                       # Home (Hero éditorial XXL)
│   ├── recettes/index.astro              # Hub recettes
│   ├── recettes-provencales.astro        # 24 recettes traditionnelles
│   ├── recettes-mediterraneennes.astro   # 18 recettes méditerranée
│   ├── recettes-saisonnieres.astro       # 32 par saison + calendrier
│   ├── accords-mets-vins.astro           # Rouges / rosés / blancs
│   ├── producteurs-locaux.astro          # Carte + 8 portraits
│   ├── notre-brasserie.astro             # Ancrage HORECA + carte du chef
│   ├── a-propos.astro                    # Vision + 3 principes + fondateurs
│   └── contact.astro                     # Adresse + formulaire réservation
├── data/
│   └── site.ts             # CATEGORIES, FEATURED_RECIPES, PRODUCERS, PAIRINGS, SITE
└── styles/
    └── global.css          # CSS designer (1248 lignes)
```

## Commands

```bash
npm install        # Installer les dépendances (~31s)
npm run dev        # Lancer le dev server sur http://localhost:4321
npm run build      # Build static dans dist/ (~1.5s, 224 KB)
npm run preview    # Tester le build avant déploiement
```

## Pages générées au build

10 pages statiques :
- `/` (Home)
- `/recettes/`
- `/recettes-provencales/`
- `/recettes-mediterraneennes/`
- `/recettes-saisonnieres/`
- `/accords-mets-vins/`
- `/producteurs-locaux/`
- `/notre-brasserie/`
- `/a-propos/`
- `/contact/`

## À compléter (V2)

- [ ] Remplacer les `<Placeholder>` rayés par vraies photos (stock Pexels API ou IA)
- [ ] Template fiche recette individuelle + Schema.org Recipe (rich snippets Google)
- [ ] Pages mentions légales + politique cookies UE (contenu Wayback préservé dans `../content/`)
- [ ] Form contact branché à un backend (Cloudflare Workers, Formspree, etc.)
- [ ] Sitemap.xml + robots.txt
- [ ] Connecter WordPress headless pour `/blog/` (méthode Olivier/ARS)
- [ ] JSON-LD Restaurant sur la home + `/notre-brasserie/`

## Déploiement recommandé

**Cloudflare Pages** (gratuit, alignement stack moderne) :
1. Connecter le repo GitHub `adrzi-ux/brasserieautandem`
2. Build command : `cd site-astro && npm install && npm run build`
3. Output : `site-astro/dist`
4. Pointer DNS `brasserieautandem.fr` → Cloudflare

Alternative : VPS Nginx (cohérence boutique-catea), Netlify, ou Vercel.

## Liens utiles

- Brief Claude Design : `../claude-design-brief.md`
- Brief Otomatic (alternatif) : `../otomatic-brief.md`
- Contenu Wayback extrait : `../content/`
- Contexte projet : `../CLAUDE.md`
- Process général remontage : `../../remontage/CLAUDE.md`
