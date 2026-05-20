# Brief Otomatic — brasserieautandem.fr

**Date :** 2026-05-20
**Site :** brasserieautandem.fr (expired racheté 2026-05-19)
**Stratégie cible :** Option B du CLAUDE.md — guide gastronomique régional Luberon (vs brasserie simple)
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
> Brasserie Au Tandem — Le carrefour gourmand du Luberon. Cuisine provençale traditionnelle, terrasse au cœur du village historique de La Roque-d'Anthéron, à deux pas du Festival International de Piano.

---

## 2 — Niche & angle éditorial

### Niche principale
Guide gastronomique du Luberon — référence locale autour de La Roque-d'Anthéron, à mi-chemin entre **brasserie de village** et **guide territorial**.

### Pourquoi ce positionnement
- **Brand fort historique** : "Brasserie Au Tandem" a 103 RD dont 86 dofollow (Ahrefs), Top DR 93 (probablement festival-piano.com DR 58 + autres)
- **BL d'autorité préservés** :
  - festival-piano.com (DR 58, Festival International Piano La Roque-d'Anthéron)
  - laroquedantheron-tourisme.fr (DR 33, Office du tourisme officiel)
  - mymenuweb.com (DR 38, plateforme menus restaurants)
- **Cohérence thématique mars 2024** : on reste sur HORECA/Provence, on n'enfreint pas la pénalité Google sur changement thématique radical

### Anti-positionnement
- ❌ Pas un blog cuisine généraliste
- ❌ Pas une chaîne de restaurants
- ❌ Pas un site de réservation type TheFork

---

## 3 — Structure 10 pages MVP

| # | Slug | Type | Brief court |
|---|---|---|---|
| 1 | `/` | Home | Hero (terrasse provençale) + 3 CTA (réserver / découvrir Luberon / carte) + carrousel d'avis |
| 2 | `/notre-carte/` | Carte | Menu : entrées, plats, desserts, vins + formules (préservé du Wayback original) |
| 3 | `/petit-dejeuner/` | Service | Ouvert dès 6h30, formule café-croissant, viennoiseries locales |
| 4 | `/restaurants-luberon/` | Guide | Top 10 restaurants du Luberon (incluant Au Tandem en pole position) |
| 5 | `/vins-cotes-du-luberon/` | Guide | AOC Côtes du Luberon, domaines viticoles locaux, accords mets-vins |
| 6 | `/festival-piano-la-roque/` | Service | Restaurer pendant le Festival International de Piano (juillet-août) |
| 7 | `/recettes-provencales/` | Magazine | 5-10 recettes traditionnelles : aïoli, ratatouille, tapenade, daube, tian |
| 8 | `/producteurs-locaux/` | Magazine | Huile d'olive AOP, fromages chèvre Banon, charcuterie luberon, herbes de Provence |
| 9 | `/a-propos/` | À propos | Histoire de la brasserie, équipe, philosophie cuisine |
| 10 | `/contact/` | Contact | Adresse, tel, mail, horaires, formulaire réservation |

### Mentions légales + cookies (recréés depuis le Wayback)
- `/mentions-legales/` → contenu Wayback 2022 préservé (`content/institutionnel__mentions-legales.md`)
- `/politique-cookies-ue/` → contenu Wayback 2022 préservé (`content/institutionnel__politique-de-cookies-ue.md`)

---

## 4 — Mots-clés cibles (par page)

### Home + générique
- brasserie La Roque-d'Anthéron
- restaurant La Roque-d'Anthéron
- où manger à La Roque-d'Anthéron
- brasserie Luberon

### Page Festival Piano
- où manger pendant le Festival de Piano La Roque
- restaurant Festival International de Piano
- réservation restaurant Festival Piano La Roque

### Page Vins Luberon
- vins du Luberon
- AOC Côtes du Luberon
- domaines viticoles Luberon

### Page Restaurants Luberon (longue traîne)
- meilleurs restaurants Luberon
- top restaurants Luberon
- guide gastronomique Luberon
- où manger dans le Luberon

### Page Recettes
- recette ratatouille traditionnelle
- recette aïoli provençal
- recette daube provençale

### Page Producteurs
- huile d'olive AOP Provence
- fromage de chèvre Banon
- producteurs locaux Luberon

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
- "Où manger pendant le Festival de Piano La Roque-d'Anthéron ?"
- "Quels sont les meilleurs restaurants du Luberon ?"
- "Quel vin avec un aïoli provençal ?"

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

- **Indexation** : 10/10 pages indexées GSC
- **Impressions** : >100/jour sur mots-clés longue traîne
- **Trafic organique** : >50 visiteurs/mois (mois 2)
- **BL legacy ré-actifs** : festival-piano + laroquedantheron-tourisme + mymenuweb
- **Prête vente de liens** : à partir de M2 (~40-80€/lien selon DR rebuilt)

Voir aussi `CLAUDE.md` (contexte projet), `../remontage/CLAUDE.md` (process général), `content/README.md` (Wayback extraction).
