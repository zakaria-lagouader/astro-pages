import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://zakaria-lagouader.github.io/",
	base: "/astro-pages",
	integrations: [mdx(), sitemap(), vue(), react()],
});
