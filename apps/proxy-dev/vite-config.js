import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    proxy: {
      "/about": {
        target: "http://localhost:5174", // project-b
        changeOrigin: true,
        // Remove rewrite to preserve /about in the request
      },
      "/contact": {
        target: "http://localhost:5174", // project-b
        changeOrigin: true,
        // Remove rewrite to preserve /contact in the request
      },
      "/": {
        target: "http://localhost:5173", // project-a
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});