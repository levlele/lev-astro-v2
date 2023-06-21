import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
// import i18n from "astro-i18n-aut";
// import sitemap from "@astrojs/sitemap";
// import netlify from '@astrojs/netlify/functions';

export default defineConfig({
	trailingSlash: "always",
	output: 'static',
  build: {
    format: "directory",
  },
	// adapter: netlify(),
	integrations: [
	mdx(),
	tailwind(),
	],
});
