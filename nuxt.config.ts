export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '@/assets/scss/global.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
});
