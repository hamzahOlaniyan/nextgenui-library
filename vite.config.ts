import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// import peerDependencies from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.app.json",
      exclude: ["**/*.stories.ts", "**/*.test.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "/src/index.ts",
      name: "nextgenui-libary",
      fileName: (format) => `nextgenui-libary.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
