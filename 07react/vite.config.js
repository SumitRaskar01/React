//vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy:{
            "/api":{
                target: "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
                changeOrigin: true
            }
        }
    }
})