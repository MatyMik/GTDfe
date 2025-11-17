import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';
import path from "path";
// optional: import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        react(),
        svgr()
        // optionally use plugin instead of manual alias:
        // tsconfigPaths()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});