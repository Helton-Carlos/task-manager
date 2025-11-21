export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", 
    "nuxt-toast", 
    "@nuxt/eslint", 
    "@nuxt/icon"
  ],
  css: ["~/assets/css/main.css"],
  nitro: { compressPublicAssets: true },
  toast: {
    settings: {
      rtl: true,
      position: "bottomRight",
      timeout: 5000,
      closeOnEscape: true,
      closeOnClick: true,
      pauseOnHover: true,
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['lucide', 'fa6-brands'] 
    }
  } 
});
