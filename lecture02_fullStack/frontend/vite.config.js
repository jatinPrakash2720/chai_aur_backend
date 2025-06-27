import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      //append toh hoga hi hoga, sath mein --> iss wja se server ko lgega,,, ki localhost3000 se hi request arri ,,,jabki aa kisi aur se rhi hogi
    },
  },
  plugins: [react()],
})
