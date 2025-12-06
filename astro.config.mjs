// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    site: 'https://lhs9275.github.io',
    plugins: [tailwindcss()],
  },
});
