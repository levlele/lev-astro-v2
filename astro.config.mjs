import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  experimental: {
    assets: true,
  },
  build: {
    format: "directory",
  },
  integrations: [tailwind()],
});
