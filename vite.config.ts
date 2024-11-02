import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  define: {
    "process.env": JSON.stringify(process.env),
  },
  optimizeDeps: {
    include: ["swiper"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
