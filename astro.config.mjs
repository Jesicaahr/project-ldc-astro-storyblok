import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import db from "@astrojs/db";
import node from "@astrojs/node";
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  output: "server",
  // or 'server'
  experimental: {
    actions: true
  },
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
      region: ""
    },
    bridge: {
      customParent: "https://app.storyblok.com"
    },
    components: {
      page: "storyblok/Page",
      feature: "storyblok/Feature",
      grid: "storyblok/Grid",
      teaser: "storyblok/Teaser",
      config: "storyblok/Config",
      hero: "storyblok/Hero",
      "popular-articles": "storyblok/PopularArticles",
      "all-articles": "storyblok/AllArticles",
      article: "storyblok/Article",
      SectionSeeService: "storyblok/SectionSeeService"
    }
  }), tailwind(), db()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  adapter: node({
    mode: "standalone"
  })
});