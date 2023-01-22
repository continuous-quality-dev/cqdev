import { defineConfig } from "astro/config"

// https://astro.build/config
import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx()],
  output: "server",
  adapter: node({ mode: "middleware" }),
})
