# Brief Claude Design — brasserieautandem.fr

**Outil cible :** `claude.ai/design` (prototypage UI Anthropic)
**Sortie attendue :** maquettes UI + design system exploitables → moi je code l'implémentation Astro + Tailwind ensuite
**Complète :** `otomatic-brief.md` (focus contenu/SEO/structure). Ce brief-ci = focus **visuel/UI**.

---

## 0 — Comment utiliser ce brief

1. Va sur **`claude.ai/design`**
2. Nouveau projet → colle le **PROMPT PRINCIPAL** ci-dessous (section 1)
3. Itère via les **FOLLOW-UP PROMPTS** (section 2) pour affiner page par page
4. Exporte les maquettes validées (screenshots ou export HTML/code si dispo)
5. Reviens me partager les exports → je code l'implémentation Astro

---

## 1 — PROMPT PRINCIPAL (copy-paste tel quel)

```
Je veux designer un site nommé "Brasserie Au Tandem" — un guide de gastronomie et de recettes provençales, porté par une vraie brasserie de village au cœur de la Provence (La Roque-d'Anthéron, 13640). Ce n'est pas une vitrine de restaurant classique : c'est un magazine éditorial axé sur les recettes traditionnelles, les accords mets-vins, les producteurs locaux, avec la brasserie comme ancrage légitime.

🎯 Objectif design : un site qui inspire confiance et appétit, avec un design chaleureux, authentique, ancré dans la Provence, mais moderne dans l'exécution (typographie, espace, photographie). Il doit ressembler à un magazine culinaire éditorial type Apartamento, Marlow ou The Gentlewoman, mais sur le terrain gastronomique provençal — pas à un site de chaîne de restaurants ni à un Marmiton générique.

🎨 Identité visuelle :
- Palette principale : ocre terre cuite #C77B30, vert olive #7A8450, lavande #9B7DB9, crème #F5EFE0, brun foncé #3D2817
- Typographie : titres en serif élégante (Playfair Display ou Cormorant Garamond), corps de texte en sans-serif chaleureuse (Inter, Source Sans, ou Söhne)
- Layout : aéré, beaucoup d'espace blanc, grilles modulaires
- Imagerie : photos de plats en gros plan (lumière naturelle, ambiance terrasse provençale), portraits de producteurs (mains, visages, terroir), vues du village et des paysages Luberon
- Iconographie : minimaliste, inspirée des céramiques provençales (lignes fines, ocre)
- Tone of voice écrit : chaleureux, authentique, gourmand, accessible — adresse directe au lecteur (vous)

📐 Pages à designer (10 pages MVP) :
1. Home — Hero gastronomie + 3 CTA (Recettes / Guide / Notre brasserie) + sélection 6 recettes récentes + bloc brand Au Tandem en bas
2. /recettes/ — Hub principal : index des catégories en cards visuelles + recettes populaires en grille
3. /recettes-provencales/ — Catégorie : grille de fiches recettes (aïoli, ratatouille, tian, daube, tapenade, soupe au pistou)
4. /recettes-mediterraneennes/ — Catégorie : pasta, paëlla, tagine, mezze
5. /recettes-saisonnieres/ — Filtrage par saison (printemps/été/automne/hiver)
6. /accords-mets-vins/ — Guide tabulaire vins/plats
7. /producteurs-locaux/ — Répertoire avec fiches producteurs (huile olive, fromages, charcuterie)
8. /notre-brasserie/ — Histoire + carte + équipe (ancrage HORECA légitime, adresse 16 rue de l'église La Roque-d'Anthéron, tél 04 42 59 68 49)
9. /a-propos/ — Vision & valeurs
10. /contact/ — Adresse + tel + horaires (ouvert dès 6h30) + formulaire réservation

🧱 Composants réutilisables à designer :
- Header avec nav principale (logo Au Tandem + nav recettes/guide/brasserie/contact)
- Footer avec newsletter recettes + réseaux sociaux + crédits
- Hero variant : Home (large image + CTA double) / Catégorie (image + breadcrumb + intro)
- RecipeCard : photo carrée + titre + temps prep + difficulté + tag catégorie
- ProducerCard : portrait + nom + spécialité + lieu
- CategoryCard : icône + titre + nombre de recettes
- WineMatchTable : tableau accords mets-vins responsive
- CTABanner : section pleine largeur fond ocre avec texte + bouton

📱 Responsive : mobile-first. Penser nav burger sur mobile, grilles 1 col mobile → 2/3 cols desktop.

✨ Touches UX : transitions douces (fade-in scroll), hover subtle sur cards (légère élévation + ombre), photos avec ratio 4:5 ou 3:4 (ambiance magazine), pas de carrousels (anti-pattern UX).

Commence par me proposer le design de la HOME avec tous les composants utilisés, puis on itérera page par page.
```

---

## 2 — FOLLOW-UP PROMPTS (à utiliser après la home)

Une fois la home validée, utilise ces prompts pour itérer page par page (un par message Claude Design) :

### Hub Recettes
```
Maintenant designe la page /recettes/. C'est le hub d'entrée vers toutes les catégories. Layout : breadcrumb + H1 + intro (3 lignes) + grille de 3-4 CategoryCard (Recettes provençales, Recettes méditerranéennes, Recettes saisonnières, Accords mets-vins) + section "Recettes populaires" en grille de 6 RecipeCard + CTA "Découvrir notre brasserie" en bas.
```

### Page catégorie type
```
Designe une page catégorie type — /recettes-provencales/. Layout : breadcrumb + H1 + intro éditoriale (storytelling sur la cuisine provençale, 2-3 paragraphes) + grille 3 colonnes de RecipeCard (10-12 fiches : aïoli, ratatouille, daube, tian, tapenade, soupe au pistou, pissaladière, fougasse, brandade, panisses) + pagination ou "load more" + bloc inter-liens vers autres catégories.
```

### Fiche recette (template)
```
Designe une fiche recette individuelle (template pour les 50+ recettes futures). Layout : hero image full-width + sticky info bar (temps prep / temps cuisson / portions / difficulté) + 2 colonnes : Ingrédients (liste à puces avec quantités) | Préparation (étapes numérotées avec mini-images optionnelles) + bloc "Variantes & conseils" + bloc "Accord vin suggéré" (lien interne) + footer recettes liées (3 cards) + Schema.org Recipe injecté.
```

### Producteurs locaux
```
Designe /producteurs-locaux/. Layout : header avec carte interactive de la Provence (markers pour chaque producteur) + grille de ProducerCard (portrait + nom + spécialité + village) + filtres par type (huile, fromages, charcuterie, vins, herbes). Chaque card cliquable → page producteur (template à designer après).
```

### Notre brasserie
```
Designe /notre-brasserie/. Layout : hero avec photo de la terrasse + adresse 16 rue de l'église La Roque-d'Anthéron + horaires + tel 04 42 59 68 49 + section "Notre histoire" (3 paragraphes) + section "La carte" (menu avec entrées/plats/desserts/boissons) + section "Notre équipe" (3-4 cards portraits) + CTA réservation.
```

### Contact
```
Designe /contact/. Layout : 2 colonnes — colonne gauche : adresse + tel + horaires + map embed + réseaux sociaux | colonne droite : formulaire (nom, email, tel, date souhaitée, nb personnes, message). Footer avec horaires détaillés par jour.
```

---

## 3 — Exports souhaités

Idéalement, après itérations, exporte :
- **Screenshots** (PNG) de chaque page validée → `brasserieautandem/design/[page].png`
- **Code HTML/CSS** si Claude Design le propose → `brasserieautandem/design/code-exports/`
- **Design tokens** (couleurs, typographies, spacings) → `brasserieautandem/design/tokens.md`

À défaut, juste les screenshots me suffisent — je transposerai en Astro/Tailwind à partir du visuel.

---

## 4 — Ce qu'on fera ensuite (moi, après tes exports)

1. **Setup projet Astro + Tailwind v4** dans `brasserieautandem/site-astro/`
2. **Components Atomic Design** : Header, Footer, Hero, RecipeCard, ProducerCard, CategoryCard, WineMatchTable, CTABanner — codés en `.astro` à partir de tes maquettes
3. **Pages** : les 10 pages avec contenu généré (combinaison génération directe par moi + appels Wisewand API pour les recettes individuelles)
4. **Images stock** : sourcing via API Pexels (recettes provençales, terroir, ambiance)
5. **JSON-LD Recipe** sur les fiches recettes (rich snippets Google)
6. **Déploiement** : Cloudflare Pages ou VPS Nginx (à décider)

Voir aussi `otomatic-brief.md` (alternatif/complémentaire) et `content/README.md` (Wayback extraction).
