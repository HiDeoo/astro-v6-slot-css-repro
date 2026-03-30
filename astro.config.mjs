// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/global.css"],
      title: "My Docs",
    }),
  ],
});
