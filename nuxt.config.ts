// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head:{
      title: "Project Name",
      meta: [
        {
          content: "width=device-width, initial-scale=1",
          name: "viewport"
        },
        {
          content: "Project Name is a platform for ...",
          name: "og:description"
        }
      ]
    },
  },
  runtimeConfig: {
   public: {
    apiURL: process.env.API_URL,
    baseURL : process.env.BASE_URL || 'http://localhost:3000',
   }
  }
})
