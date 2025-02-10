// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  runtimeConfig: {
    secretKey: "1235",
    public: {
      apiBaseUrl: "http:localhost:8000",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
  },
});
