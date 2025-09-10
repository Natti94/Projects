import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT,
    proxy: {
      "/api": `http://localhost:${process.env.VITE_PORT + 1}`,
    },
  },
});
