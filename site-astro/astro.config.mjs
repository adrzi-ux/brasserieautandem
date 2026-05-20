import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brasserieautandem.fr',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
