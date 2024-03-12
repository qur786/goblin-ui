// vite.config.js
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      include: ["lib/"],
      // rollupTypes: true, This option is used for bundling all types into 1 .d.ts file but due to this Ref: https://github.com/qmhc/vite-plugin-dts?tab=readme-ov-file#internal-error-occurs-when-using-rolluptypes-true issue, it is failing the storybook buil.
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/main.tsx"),
      name: "Goblin",
      // the proper extensions will be added
      fileName: "goblin-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
