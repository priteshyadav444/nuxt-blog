// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxt/ui", "@nuxt/image"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  runtimeConfig: {
    secretKey: "1235",
    public: {
      apiBaseUrl: "http:localhost:8000",
    },
  },
});
