# CLAUDE.md — brasserieautandem.fr

## Statut
✓ **ACHETÉ le 2026-05-19** — premier batch du projet remontage expired.
✓ **EN PRODUCTION le 2026-05-21** — site Astro statique, 36 pages live sur `https://www.brasserieautandem.fr`

## 🔧 À FAIRE — Session 2026-06-01

### 1. Déployer le fix Schema.org (PRIORITÉ HAUTE)
Branche `claude/github-file-reading-vTML6` contient le correctif GSC.

**Ce qui a été corrigé :**
- Champ `image` ajouté dans le JSON-LD Recipe sur toutes les fiches recettes → débloque les rich snippets Google
- `SITE.url` corrigé (`https://brasserieautandem.fr` → `https://www.brasserieautandem.fr`)

**Commandes à lancer depuis ta machine locale :**
```bash
git pull origin claude/github-file-reading-vTML6
git checkout master
git merge claude/github-file-reading-vTML6
cd site-astro && npm run build
scp -i ~/.ssh/boutique-catea -r dist/* root@207.180.213.109:/var/www/brasserieautandem/
ssh -i ~/.ssh/boutique-catea root@207.180.213.109 "chown -R www-data:www-data /var/www/brasserieautandem"
```

**Après déploiement :** retester dans Google Rich Results Test sur `/recettes/risotto-feves-menthe/` — doit passer au vert.

### 2. GSC — Pages non indexées
- "Introuvable (404)" : identifier quelle URL via GSC → Couverture → Introuvable, puis créer redirect Nginx si nécessaire
- "Détectée, non indexée" : attendre, site trop récent (11 jours au 01/06/2026)

## 🚀 Site en production (2026-05-21)

### Stack
- **Astro 5** static build (60 pages) — code dans `site-astro/`
- **WP headless** : `cms.brasserieautandem.fr` → `/var/www/brasserieautandem-wp` (cible Wisewand uniquement)
- **CSS** : Cormorant Garamond + Inter + JetBrains Mono (Google Fonts)
- **Images** : 30 photos Pexels API (1 brasserie + 21 recettes + 8 producteurs) + 3 portraits équipe
- **Schema.org Recipe** : JSON-LD sur 24 fiches recettes, champ `image` inclus (obligatoire rich snippets)

### Infrastructure
- **VPS** : Contabo `207.180.213.109` (mutualisé avec boutique-catea, dirs séparés)
- **Webroot Astro** : `/var/www/brasserieautandem/`
- **Webroot WP headless** : `/var/www/brasserieautandem-wp/`
- **Source Astro sur VPS** : `/opt/brasserieautandem-astro/` (pour cron rebuild)
- **Cron rebuild** : `0 6,18 * * *` → `/opt/rebuild-brasserie.sh` (fetch articles WP + build + rsync)
- **Logs rebuild** : `/var/log/brasserie-rebuild.log`
- **Nginx vhosts** :
  - `brasserieautandem` → site Astro statique (index.html, try_files)
  - `cms-brasserieautandem` → WP headless PHP 8.2, redirige `/` → `/wp-admin/`
- **SSL** : Cloudflare Origin Certificate (RSA 2048, valide jusqu'au 2041-05-17)
  - Stocké sur VPS : `/etc/ssl/brasserieautandem/{fullchain,privkey}.pem`

### Cloudflare
- **DNS** : NS Cloudflare (ariadne + kipp), comme boutique-catea (même compte)
- **A records** : `@` et `www` → `207.180.213.109` (Proxied orange)
- **TXT GSC** : préservé après switch NS
- **SSL/TLS** : **Full (strict)** — vérification cert backend
- **Always Use HTTPS** : ON
- **Redirect Rules** : "Apex → www (canonical)" Active (URI Full wildcard) — redondance avec Nginx
- **Cache** : par défaut Cloudflare CDN actif sur assets statiques

### URLs
- Canonical : `https://www.brasserieautandem.fr`
- Sitemap : `https://www.brasserieautandem.fr/sitemap-index.xml`
- robots.txt : `https://www.brasserieautandem.fr/robots.txt`

### Pages
| Catégorie | URLs |
|---|---|
| Institutionnel (11) | `/`, `/recettes/`, `/recettes-{provencales,mediterraneennes,saisonnieres}/`, `/accords-mets-vins/`, `/producteurs-locaux/`, `/notre-brasserie/`, `/a-propos/`, `/contact/` |
| Légal (2) | `/mentions-legales/`, `/politique-de-cookies-ue/` (slugs Wayback préservés) |
| Fiches recettes (24) | `/recettes/{slug}/` × 12 Provençales + 9 Méditerranéennes + 3 Saisonnières |
| Blog Wisewand (23+) | `/blog/` (liste) + `/blog/{slug}/` (articles WP headless, hero = première image contenu) |
| Redirects 301 | `/notre-carte/` → `/notre-brasserie/`, `/diaporama/` → `/` |

### Brand info (fictive, vs Wayback original)
- **Adresse** : Place du Cours, Saint-Cannat, 13760, Bouches-du-Rhône (vs `16 rue de l'église, La Roque-d'Anthéron, 13640` original)
- **Email** : `contact@brasserieautandem.fr` (pas de téléphone affiché)
- **Équipe fictive** : Camille Aubert (cuisine), Léo Pinault (écriture & salle), Inès Cabrol (salle & vin)
- **Anciens patrons cités** : Yvonne & Henri (fictifs, depuis 1932 - 2019)
- **Eric Girardi / DIGISENSE SARL** (vraies infos Wayback) → REMPLACÉS dans tout le site

### Production live commands
```bash
# Build local
cd site-astro && npm run build

# Deploy
scp -i ~/.ssh/boutique-catea -r dist/* root@207.180.213.109:/var/www/brasserieautandem/
ssh -i ~/.ssh/boutique-catea root@207.180.213.109 "chown -R www-data:www-data /var/www/brasserieautandem"

# Refresh images Pexels (regenerate src/data/recipe-images.ts + producer-images.ts)
node tools/fetch-pexels.mjs   # Needs PEXELS_API_KEY in .env (gitignored)

# Verify cert match (sur VPS)
openssl x509 -noout -modulus -in /etc/ssl/brasserieautandem/fullchain.pem | openssl md5
openssl rsa -noout -modulus -in /etc/ssl/brasserieautandem/privkey.pem | openssl md5
```

### GSC
- Domain property `brasserieautandem.fr` validée (TXT DNS)
- Sitemap soumis 2026-05-21 → 34 URLs découvertes, traitement réussi
- **Snapshot 2026-05-29 (J+8)** : 2 indexées / 3 non-indexées / ~29 en attente
- **Diag 2026-06-07** : indexation lente probablement causée par absence canonical → fixé (voir ci-dessous)
- **Indexation manuelle relancée 2026-06-07** : 3/5 URLs via "Demander indexation" (`/`, `/recettes/`, `/notre-brasserie/`). 2 restantes à refaire le 2026-06-08 (`/recettes-provencales/`, `/accords-mets-vins/`) — quota épuisé
- **Re-check prévu 2026-06-14** (J+7 des fixes) : attendu 8-15 pages indexées

### 🔧 Fixes UX 2026-06-10
- **Cartes Google Maps** ajoutées sur `/notre-brasserie/` (Saint-Cannat) et `/producteurs-locaux/` (Luberon)
- **Portraits équipe** : photos Pexels réelles (fichiers `public/images/team/`) remplacent les placeholders
- **X-Frame-Options retiré** du nginx (bloquait les iframes Google Maps)
- **WP headless** `cms.brasserieautandem.fr` configuré + Wisewand connecté (user: adrien)
- **Blog `/blog/`** : 23+ articles Wisewand, hero = featured_media WP ou première img contenu non-screenshot
- **Cron rebuild** 6h+18h : `/opt/rebuild-brasserie.sh` → build Astro + rsync vers webroot

### 🔧 Fixes SEO 2026-06-10
- **Recipe JSON-LD `image`** : champ manquant sur 6 recettes → corrigé, validation GSC lancée

### 🔧 Fixes SEO 2026-06-07
Suite au diag GSC (2/34 indexées à J+8), 3 problèmes identifiés + corrigés en prod :

1. **Aucun `<link rel="canonical">`** sur les 36 pages → ajout via `Site.astro` layout (1 ligne, propage partout)
   - Commit `4c94ae8` — `seo: ajout canonical sur toutes les pages + fix og:url + nettoyage stamp home`
2. **`og:url` non absolu** (utilisait `Astro.url.href` qui peut être localhost en SSR) → switch vers `new URL(Astro.url.pathname, Astro.site).href`
3. **`SITE.url` en apex** (utilisé dans JSON-LD `author.url`) → corrigé en www
4. **Résidu "LA ROQUE-D'ANTHÉRON" dans stamp SVG home** (`index.astro:44`) → remplacé par "SAINT-CANNAT · PROVENCE"
5. **Aucun JSON-LD Restaurant** sur home + `/notre-brasserie/` → ajout via slot `head` du layout
   - Commit `aba0846` — `seo: ajout Schema.org Restaurant sur home + /notre-brasserie/`
   - Adresse fictive Saint-Cannat 13760, cuisine FR/Provençal/Med, areaServed Provence, sameAs Instagram. Pas de téléphone, pas de gérant cité.

⚠️ **Décision branding (2026-06-07)** : malgré la SARL d'origine en dissolution (depuis 2026-01-10), aucune référence aux anciens gérants/adresse réelle ne doit figurer sur le site live. Mémoire : `feedback_remontage_zero_reference_anciens_gerants.md`

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

### ✅ Étape 2bis — MVP site Astro (FAIT 2026-05-20)

Direction stack actée : **Astro statique + WP headless blog uniquement** (méthode Olivier/ARS), pas WordPress full.

Pipeline réalisé :
1. Brief Otomatic préparé (`otomatic-brief.md`) — non utilisé in fine
2. Brief Claude Design préparé (`claude-design-brief.md`) — utilisé
3. Design itéré dans `claude.ai/design` (direction éditoriale chaude terracotta validée)
4. Export bundle Claude Design via API Anthropic (`api.anthropic.com/v1/design/h/{hash}`)
5. Implémentation Astro complète dans `site-astro/`

**État `site-astro/`** :
- 10 pages MVP buildent en 1.48s (224 KB total, 0 erreur)
- 11 composants Astro réutilisables (Header, Footer, Newsletter, CTABanner, RecipeCard, CategoryCard, ProducerCard, CategoryHero, Stamp, Placeholder, Icon)
- CSS designer copié tel quel (`global.css`, 1248 lignes)
- Brand préservée : Brasserie Au Tandem · 16 rue de l'église · La Roque-d'Anthéron · 13640 · 04 42 59 68 49
- Pas de Tailwind ajouté (CSS designer suffit, pas de redondance)

**Pages générées** : `/`, `/recettes/`, `/recettes-provencales/`, `/recettes-mediterraneennes/`, `/recettes-saisonnieres/`, `/accords-mets-vins/`, `/producteurs-locaux/`, `/notre-brasserie/`, `/a-propos/`, `/contact/`

### Étape 4 — Setup tech (à venir, simplifié vs plan initial)

Stack Astro = pas de WP full nécessaire. Options déploiement :

- **Cloudflare Pages (recommandé)** — gratuit, build auto sur push GitHub, HTTPS, CDN global. Build : `cd site-astro && npm install && npm run build`. Output : `site-astro/dist/`
- **VPS Nginx** (cohérent boutique-catea) — déployer le `dist/` statique
- **Netlify / Vercel** — alternatives équivalentes

Pour le blog futur (V2) : WordPress headless connecté via REST API.

- [ ] Choisir l'hébergement
- [ ] Configurer DNS `brasserieautandem.fr` → hébergement
- [ ] HTTPS (Cloudflare Pages le fait auto, sinon Let's Encrypt)
- [ ] Variables environnement éventuelles :
  ```
  DOMAIN=brasserieautandem.fr
  WP_HEADLESS_URL=  # plus tard pour /blog/
  ```

### Étape 2 — Setup tech
- [ ] VPS + DNS + LEMP + WP
- [ ] Variables :
  ```
  DOMAIN=brasserieautandem.fr
  VPS_IP=
  WP_PATH=/var/www/brasserieautandem
  ```

### ✅ Étape 3 — Content (orientation actée 2026-05-20)

**Pivot final : Guide gastronomie + Recettes** (vs Option A brasserie simple ou Option B hyperlocal Luberon)

Raisons :
- Volume éditorial massif possible (50+ recettes futures = longue traîne énorme)
- Brand Brasserie Au Tandem préservée comme ancrage HORECA légitime (cohérent BL d'origine)
- Cohérence thématique mars 2024 OK (on reste cuisine/HORECA)

Structure MVP 10 pages livrée (cf. Étape 2bis ci-dessus). Roadmap content V2-V3 dans `otomatic-brief.md` section 10.

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
