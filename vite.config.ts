import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],

  vercel: {
    isr: {
      "/pages/a": { expiration: 15, symlink: "api/ssr_", route: "^/a/.*$" },
      "/pages/b/c": { expiration: 15, symlink: "api/ssr_", route: "^/b/c/.*$" },
      "/pages/d": { expiration: 15, symlink: "api/ssr_", route: "^/d$" },
      "/pages/e": { expiration: 25 },
    },
  },
});
