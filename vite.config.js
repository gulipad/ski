import { defineConfig } from "vite";

export default defineConfig({
  // Assets in /public are served at root and copied to dist on build
  publicDir: "public",
  build: {
    outDir: "dist",
  },
});
