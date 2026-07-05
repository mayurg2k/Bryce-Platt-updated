import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Treat .js files in src/ as JSX (CRA convention)
      include: "**/*.{js,jsx,ts,tsx}",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    // Emergent preview runs behind a reverse proxy; allow all hosts.
    allowedHosts: true,
    hmr: {
      // Use secure WebSocket for the hosted preview
      clientPort: 443,
      protocol: "wss",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Increase chunk size warning limit; radix + recharts bundles are big.
    chunkSizeWarningLimit: 1500,
  },
  esbuild: {
    // Allow JSX inside .js files (from CRA legacy)
    loader: "jsx",
    include: [/src\/.*\.js$/, /src\/.*\.jsx$/],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
