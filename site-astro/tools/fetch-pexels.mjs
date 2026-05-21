#!/usr/bin/env node
// fetch-pexels.mjs — Télécharge des images Pexels pour les recettes + producteurs
// + génère src/data/recipe-images.ts et src/data/producer-images.ts
//
// Usage:
//   node tools/fetch-pexels.mjs
//
// Requires PEXELS_API_KEY in .env

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// --- Load .env ---
const envContent = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
const env = Object.fromEntries(
  envContent.split('\n')
    .filter(l => l.trim() && !l.startsWith('#'))
    .map(l => {
      const [k, ...v] = l.split('=');
      return [k.trim(), v.join('=').trim()];
    })
);
const API_KEY = env.PEXELS_API_KEY;
if (!API_KEY) {
  console.error('❌ PEXELS_API_KEY missing in .env');
  process.exit(1);
}

// --- Recipes: slug -> Pexels query ---
const RECIPE_QUERIES = {
  'aioli-traditionnel': 'garlic mayonnaise',
  'ratatouille-confite': 'ratatouille',
  'daube-avignonnaise': 'beef stew red wine',
  'tian-legumes-soleil': 'vegetable gratin',
  'tapenade-noire-aups': 'olive tapenade',
  'soupe-au-pistou': 'vegetable soup',
  'pissaladiere-nice': 'onion tart',
  'fougasse-aux-olives': 'focaccia bread olive',
  'brandade-nimoise': 'salt cod cream',
  'panisses-marseille': 'chickpea fries',
  'pieds-paquets-marseillais': 'beef stew rustic',
  'tarte-tropezienne': 'brioche cream cake',
  'orecchiette-brocolis': 'orecchiette pasta',
  'paella-valenciana': 'paella',
  'tagine-agneau-citron': 'lamb tagine',
  'hommos-moutabal': 'hummus mezze',
  'pizza-margherita-levain': 'pizza margherita',
  'salade-grecque-traditionnelle': 'greek salad feta',
  'couscous-sept-legumes': 'couscous vegetables',
  'loup-de-mer-citron': 'baked fish lemon',
  'lasagnes-ragu-bolognaise': 'lasagna bolognese',
};

// --- Producers: name -> query ---
const PRODUCER_QUERIES = {
  'jean-bertaud': 'olive oil producer provence',
  'maryse-ferrand': 'goat cheese maker farm',
  'domaine-reibaud': 'vineyard winemaker provence',
  'famille-sicard': 'herbs lavender provence',
  'pascal-roux': 'butcher charcuterie',
  'atelier-brun': 'baker bread sourdough',
  'jardins-de-regine': 'farmer vegetables organic',
  'pierre-calas': 'beekeeper honey',
};

// --- HTTP helper ---
function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location, headers).then(resolve).catch(reject);
      }
      let chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({
        status: res.statusCode,
        body: Buffer.concat(chunks),
        headers: res.headers,
      }));
    }).on('error', reject);
  });
}

// --- Pexels search ---
async function pexelsSearch(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`;
  const { status, body } = await get(url, { Authorization: API_KEY });
  if (status !== 200) throw new Error(`Pexels API error ${status}`);
  const json = JSON.parse(body.toString('utf8'));
  if (!json.photos || json.photos.length === 0) throw new Error(`No photos for "${query}"`);
  return json.photos[0]; // best match (Pexels orders by relevance)
}

// --- Download image ---
async function downloadImage(url, outPath) {
  const { status, body } = await get(url);
  if (status !== 200) throw new Error(`Download failed ${status}: ${url}`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body);
  return body.length;
}

// --- Main ---
async function main() {
  const recipeImages = {};
  const producerImages = {};

  console.error('=== Fetching recipe images ===');
  for (const [slug, query] of Object.entries(RECIPE_QUERIES)) {
    try {
      process.stderr.write(`  ${slug.padEnd(35)} query: "${query}" ... `);
      const photo = await pexelsSearch(query);
      // Use 'large' size (around 1880x...)
      const imgUrl = photo.src.large || photo.src.original;
      const outPath = path.join(ROOT, 'public', 'images', 'recettes', `${slug}.jpg`);
      const bytes = await downloadImage(imgUrl, outPath);
      recipeImages[slug] = {
        src: `/images/recettes/${slug}.jpg`,
        alt: photo.alt || query,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        pexelsUrl: photo.url,
      };
      process.stderr.write(`✓ (${Math.round(bytes / 1024)}KB)\n`);
      await new Promise(r => setTimeout(r, 200)); // be polite to Pexels
    } catch (e) {
      process.stderr.write(`✗ ${e.message}\n`);
    }
  }

  console.error('\n=== Fetching producer images ===');
  for (const [slug, query] of Object.entries(PRODUCER_QUERIES)) {
    try {
      process.stderr.write(`  ${slug.padEnd(25)} query: "${query}" ... `);
      const photo = await pexelsSearch(query);
      const imgUrl = photo.src.large || photo.src.original;
      const outPath = path.join(ROOT, 'public', 'images', 'producteurs', `${slug}.jpg`);
      const bytes = await downloadImage(imgUrl, outPath);
      producerImages[slug] = {
        src: `/images/producteurs/${slug}.jpg`,
        alt: photo.alt || query,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        pexelsUrl: photo.url,
      };
      process.stderr.write(`✓ (${Math.round(bytes / 1024)}KB)\n`);
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      process.stderr.write(`✗ ${e.message}\n`);
    }
  }

  // --- Generate TypeScript data files ---
  const recipeImagesTs = `// AUTO-GENERATED by tools/fetch-pexels.mjs — DO NOT EDIT BY HAND
// Run: node tools/fetch-pexels.mjs

export type ImageData = {
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
  pexelsUrl: string;
};

export const RECIPE_IMAGES: Record<string, ImageData> = ${JSON.stringify(recipeImages, null, 2)};
`;
  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'recipe-images.ts'), recipeImagesTs);

  const producerImagesTs = `// AUTO-GENERATED by tools/fetch-pexels.mjs — DO NOT EDIT BY HAND

export type ImageData = {
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
  pexelsUrl: string;
};

export const PRODUCER_IMAGES: Record<string, ImageData> = ${JSON.stringify(producerImages, null, 2)};
`;
  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'producer-images.ts'), producerImagesTs);

  console.error(`\n✓ Done. ${Object.keys(recipeImages).length} recipes + ${Object.keys(producerImages).length} producers.`);
  console.error(`  - public/images/recettes/*.jpg`);
  console.error(`  - public/images/producteurs/*.jpg`);
  console.error(`  - src/data/recipe-images.ts`);
  console.error(`  - src/data/producer-images.ts`);
}

main().catch(e => { console.error(e); process.exit(1); });
