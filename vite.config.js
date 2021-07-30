import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
module.exportsdefineConfig = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portofolio/'
//     : '/',
  plugins: [vue()],
}

// export default defineConfig({
//    publicPath: process.env.NODE_ENV === 'production'
//     ? '/portofolio/'
//     : '/',
//     plugins: [vue()],
// });
