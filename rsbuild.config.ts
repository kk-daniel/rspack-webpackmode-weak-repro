import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  html: {
    template: "./public/index.html",
  },
  output: {
    assetPrefix: "./",
    distPath: {
      root: "./rsbuild-dist",
    },
  },
});
