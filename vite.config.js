import { defineConfig } from "vite";

export default defineConfig({
  // Assets in /public are served at root and copied to dist on build
  publicDir: "public",
  build: {
    outDir: "dist",
  },
  server: {
    // Handle /pose-generator route in dev server
    middlewareMode: false,
  },
  plugins: [
    {
      name: "pose-generator-rewrite",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/pose-generator" || req.url === "/pose-generator/") {
            req.url = "/pose-editor.html";
          }
          next();
        });
      },
    },
  ],
});
