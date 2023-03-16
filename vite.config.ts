import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue2";
import Components from "unplugin-vue-components/vite";
import {VuetifyResolver} from "unplugin-vue-components/resolvers";

export default defineConfig({
  resolve: {
    alias: {
      // This enables the runtime compiler for Vue 2.
      vue: "vue/dist/vue.esm.js",
    },
  },

  plugins: [
    vue(),
    Components({
      resolvers: [
        VuetifyResolver(),
      ],
    }),
  ],
});
