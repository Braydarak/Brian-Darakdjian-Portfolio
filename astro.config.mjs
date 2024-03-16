import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    tailwind(),
    robotsTxt(),
    react({
      include: ["**/react/*"],
    }),
  ],
  site: "https://porfolio.dev/",
});
