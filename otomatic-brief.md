# Brief Otomatic — brasserieautandem.fr

**Date :** 2026-05-20
**Site :** brasserieautandem.fr (expired racheté 2026-05-19)
**Stratégie cible :** Guide gastronomie + Recettes (brand brasserie préservée comme ancrage HORECA, mais positionnement éditorial sur les recettes pour le volume)
**Stack post-Otomatic :** Astro + Tailwind v4 + WP headless blog (méthode Olivier/ARS)

---

## 0 — Comment utiliser ce brief dans Otomatic

1. Ouvrir Otomatic → **Site Builder**
2. Cliquer **Nouveau site**
3. Coller les sections ci-dessous dans les champs correspondants de l'UI
4. Générer **10 pages** (configurable selon l'UI)
5. Télécharger le ZIP du site statique généré
6. Dézipper dans `brasserieautandem/mvp-otomatic/`
7. **Étape suivante** : Antigravity/Cursor + Claude Code pour migrer vers Astro

---

## 1 — Identité du site

### Nom de domaine
`brasserieautandem.fr`

### Nom de marque (préservé)
**Brasserie Au Tandem**

### Localisation (préservée — clé pour le SEO local + BL d'origine)
- **Adresse réelle** : 16 rue de l'église, 13640 La Roque-d'Anthéron, Provence
- **Téléphone** : 04 42 59 68 49
- **Région** : Luberon / Provence / Bouches-du-Rhône

### Pitch / Tagline
> Brasserie Au Tandem — Guide gastronomie & recettes provençales. Les coulisses d'une brasserie de village au cœur de la Provence, qui partage ses recettes, ses producteurs et son guide gastronomique.

---

## 2 — Niche & angle éditorial

### Niche principale
**Guide gastronomie + Recettes** — angle éditorial axé volume (recettes traditionnelles, accords mets-vins, producteurs, techniques). Brand "Brasserie Au Tandem" préservée comme **ancrage HORECA légitime** (justifie l'autorité gastronomique aux yeux de Google + des BL d'autorité).

### Pourquoi ce positionnement
- **Brand fort historique** : "Brasserie Au Tandem" a 103 RD dont 86 dofollow (Ahrefs), Top DR 93 (probablement festival-piano.com DR 58 + autres)
- **BL d'autorité préservés** (tous cohérents HORECA/gastronomie) :
  - festival-piano.com (DR 58, Festival International Piano La Roque-d'Anthéron)
  - laroquedantheron-tourisme.fr (DR 33, Office du tourisme officiel)
  - mymenuweb.com (DR 38, plateforme menus restaurants)
- **Cohérence thématique mars 2024** : on reste dans HORECA + gastronomie + cuisine, pas de bascule radicale. Le volume éditorial vient des recettes (longue traîne énorme).
- **Volume éditorial** : 10s à 100s de recettes possibles (vs ~5 pages d'un site brasserie classique)

### Angle narratif
"La brasserie partage ses recettes et son carnet d'adresses" — voix du chef + équipe Au Tandem, ancrage village provençal, mais ouverture nationale via les recettes.

### Anti-positionnement
- ❌ Pas un blog cuisine industriel à la Marmiton (pas d'agrégat sans personnalité)
- ❌ Pas un site exclusivement local "tourisme Luberon" (trop niche, volume limité)
- ❌ Pas une chaîne de restaurants
- ❌ Pas un site de réservation type TheFork

---

## 3 — Structure 10 pages MVP

Architecture : **6 pages recettes (catégories) + 2 pages guide gastronomie + 1 brasserie + 1 contact**. La home oriente vers les recettes en priorité, la brasserie est l'ancrage légitime.

| # | Slug | Type | Brief court |
|---|---|---|---|
| 1 | `/` | Home | Hero gastronomie + 3 CTA (recettes / guide / notre brasserie) + sélection 6 recettes récentes + bloc brand Au Tandem |
| 2 | `/recettes/` | Hub Recettes | Index principal de toutes les catégories de recettes (cards par catégorie + recettes populaires) |
| 3 | `/recettes-provencales/` | Catégorie | Recettes traditionnelles provençales : aïoli, ratatouille, tapenade, daube, tian, soupe au pistou (5-10 fiches) |
| 4 | `/recettes-mediterraneennes/` | Catégorie | Recettes du pourtour méditerranéen : pasta, paëlla, tagine, mezze, salades (5-10 fiches) |
| 5 | `/recettes-saisonnieres/` | Catégorie | Recettes de saison : printemps (asperges, fraises), été (tomates, courgettes), automne (champignons, courges), hiver (gibier, agrumes) |
| 6 | `/accords-mets-vins/` | Guide | Accords vins/plats par cépages, terroirs (Côtes du Rhône, Luberon, Provence, Languedoc) — service à valoriser auprès du Festival Piano + restos |
| 7 | `/producteurs-locaux/` | Guide | Huile d'olive AOP, fromages chèvre Banon, charcuterie, herbes de Provence — répertoire avec fiches producteurs |
| 8 | `/notre-brasserie/` | Brasserie | Histoire Brasserie Au Tandem, carte du chef, équipe, valeurs — préserve l'ancrage HORECA (intègre /notre-carte/ historique) |
| 9 | `/a-propos/` | À propos | Notre vision : partager les recettes du Sud, le terroir, les producteurs |
| 10 | `/contact/` | Contact | Adresse 16 rue de l'église La Roque-d'Anthéron, tel 04 42 59 68 49, horaires, formulaire |

### Mentions légales + cookies (recréés depuis le Wayback)
- `/mentions-legales/` → contenu Wayback 2022 préservé (`content/institutionnel__mentions-legales.md`)
- `/politique-cookies-ue/` → contenu Wayback 2022 préservé (`content/institutionnel__politique-de-cookies-ue.md`)

---

## 4 — Mots-clés cibles (par page)

### Home + générique
- guide gastronomie provençale
- recettes provençales authentiques
- cuisine méditerranéenne traditionnelle

### Hub Recettes
- recettes du Sud
- recettes provençales faciles
- recettes méditerranéennes maison

### Recettes provençales (longue traîne forte)
- recette ratatouille traditionnelle
- recette aïoli provençal
- recette daube provençale
- recette tapenade noire
- recette tian provençal
- recette soupe au pistou
- recette pissaladière

### Recettes méditerranéennes
- recette paëlla maison
- recette tagine traditionnel
- recettes pâtes italiennes
- recette mezze libanais

### Recettes saisonnières
- recettes asperges printemps
- recettes courgettes été
- recettes champignons automne
- recettes gibier hiver

### Accords mets-vins
- accord vin et aïoli
- vin Côtes du Rhône avec daube
- vin Côtes du Luberon recommandations

### Producteurs locaux
- huile d'olive AOP Provence
- fromage de chèvre Banon AOP
- charcuterie luberon producteurs
- herbes de Provence label rouge

### Notre brasserie (local pur)
- brasserie La Roque-d'Anthéron
- restaurant La Roque-d'Anthéron
- où manger à La Roque-d'Anthéron
- restaurant Festival Piano La Roque

---

## 5 — Tone of voice

### Voix
- **Chaleureux** : on accueille, on partage, on raconte
- **Authentique** : ancré local, on connaît nos producteurs nominativement
- **Gourmand** : on évoque les arômes, les textures, les couleurs
- **Accessible** : pas de jargon gastronomique pédant
- **Confiant** : on est une institution du village depuis ans

### Vocabulaire
- ✅ "Notre", "ici", "chez nous", "au cœur du Luberon"
- ✅ "Producteurs", "domaines", "savoir-faire", "tradition"
- ✅ Noms propres : Banon, Cucuron, Lourmarin, Goult, Apt
- ❌ "Étoilé", "michelin", "gastronomique haut de gamme" (pas notre positionnement)

### Style d'écriture
- Phrases courtes à moyennes (15-25 mots)
- Ponctuation : virgules + points, peu de points-virgules
- Adresse directe au lecteur : "Vous", "venez", "découvrez"
- Pas de "On" formel

---

## 6 — Identité visuelle suggérée

### Palette
- **Primary** : ocre `#C77B30` (terre cuite Provence)
- **Secondary** : olive `#7A8450` (feuillage olivier)
- **Accent** : lavande `#9B7DB9`
- **Neutre** : crème `#F5EFE0` + brun foncé `#3D2817`

### Typographie
- Titres : serif chaleureuse (ex : Playfair Display, Cormorant Garamond)
- Corps : sans-serif lisible (ex : Inter, Source Sans)

### Imagerie cible
- Terrasse village, oliviers, lavande
- Plats traditionnels en gros plan (aïoli, tian, daube)
- Vue village La Roque-d'Anthéron
- Producteurs locaux (visages, mains, terroir)

→ Otomatic propose souvent du stock libre — préciser "Provence", "Luberon", "cuisine méditerranéenne traditionnelle"

---

## 7 — Données structurées (à ajouter post-Otomatic)

### JSON-LD Restaurant (page home)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Brasserie Au Tandem",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "16 rue de l'église",
    "postalCode": "13640",
    "addressLocality": "La Roque-d'Anthéron",
    "addressRegion": "Provence",
    "addressCountry": "FR"
  },
  "telephone": "+33442596849",
  "servesCuisine": "French, Provençal",
  "priceRange": "€€",
  "openingHours": "Mo-Su 06:30-22:00"
}
```

### Featured snippets ciblés
- "Comment faire un aïoli provençal traditionnel ?"
- "Quel vin servir avec une ratatouille ?"
- "Recette tian provençal facile"
- "Comment réussir une daube provençale ?"
- "Où manger pendant le Festival de Piano La Roque-d'Anthéron ?"

### JSON-LD Recipe (par recette individuelle)
À ajouter sur chaque fiche recette (post-Otomatic) :
```json
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Aïoli provençal",
  "author": {"@type": "Organization", "name": "Brasserie Au Tandem"},
  "recipeCuisine": "Provençal",
  "recipeIngredient": [...],
  "recipeInstructions": [...],
  "prepTime": "PT20M",
  "cookTime": "PT30M",
  "recipeYield": "4 personnes"
}
```
→ Schema Recipe = **rich snippets Google** (étoiles + image + temps de prep dans les SERPs) = boost CTR ~30%

---

## 8 — Post-génération Otomatic

### Workflow recommandé (méthode Olivier/ARS)
1. Génération MVP Otomatic → ZIP HTML statique
2. Dézip dans `brasserieautandem/mvp-otomatic/`
3. Ouvrir le dossier dans Antigravity (ou Cursor/Windsurf)
4. Prompt Claude Code : "Convertis ce MVP HTML statique en projet Astro + Tailwind v4 + GSAP, en conservant strictement le contenu texte. Architecture Atomic Design avec composants réutilisables (Header, Footer, Hero, Card, etc.)"
5. Connecter un WordPress headless juste pour `/blog/` (futur — après lancement V1)
6. Déploiement Cloudflare Pages ou VPS Nginx

### Pages à compléter manuellement post-Otomatic
- `/mentions-legales/` → coller depuis `content/institutionnel__mentions-legales.md`
- `/politique-cookies-ue/` → coller depuis `content/institutionnel__politique-de-cookies-ue.md`
- `/contact/` → vérifier que les coordonnées réelles (16 rue de l'église, 04 42 59 68 49) sont bien intégrées

### Validation pré-déploiement
- [ ] Brand "Brasserie Au Tandem" présent dans H1/title de la home
- [ ] Adresse + tel cohérents sur toutes les pages
- [ ] Mentions légales + cookies présentes
- [ ] Schema.org Restaurant injecté sur la home
- [ ] Sitemap.xml généré
- [ ] robots.txt OK
- [ ] HTTPS Cloudflare actif
- [ ] GSC Domain property toujours validée

---

## 9 — KPIs cibles 30-60 jours

- **Indexation** : 10/10 pages MVP indexées GSC
- **Impressions** : >300/jour sur mots-clés longue traîne (recettes = volume massif)
- **Trafic organique** : >100 visiteurs/mois (mois 2), >500/mois (mois 4) avec l'ajout progressif de fiches recettes individuelles
- **BL legacy ré-actifs** : festival-piano + laroquedantheron-tourisme + mymenuweb
- **Prête vente de liens** : à partir de M2 (~40-80€/lien selon DR rebuilt)
- **Volume éditorial cible M3** : 50+ fiches recettes individuelles (cadence 2/jour Wizards) → rich snippets cumulés

## 10 — Roadmap post-MVP (V2 / V3)

### V2 (M1 → M3)
- Ajouter fiches recettes individuelles dans chaque catégorie (5-10 par catégorie initiale, puis cadence 2/jour)
- Connecter WP headless pour `/blog/` (actus, dégustations, événements brasserie)
- Schema Recipe sur chaque fiche

### V3 (M3+)
- Annuaire restaurants partenaires (programmatique)
- Newsletter recettes (lead magnet)
- Pages saisonnières dynamiques (ex : "Recettes de Noël", "Recettes Été")
- Outils interactifs : convertisseur unités, calculateur portions

Voir aussi `CLAUDE.md` (contexte projet), `../remontage/CLAUDE.md` (process général), `content/README.md` (Wayback extraction).
