import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	trailingSlash: "always",
	output: 'static',
  build: {
    format: "directory",
  },
	srcDir: './en',
	integrations: [
	mdx(),
	tailwind(),
	],
});
