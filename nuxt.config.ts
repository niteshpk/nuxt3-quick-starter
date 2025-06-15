// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],

  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image"],

  devtools: {
    enabled: false,
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": { prerender: true },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-07-11",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  alias: {
    "@components": "./app/components",
  },

  runtimeConfig: {
    emailId: process.env.APP_EMAIL_ID,
    receiverId: process.env.APP_EMAIL_RECEIVER_ID,
    emailClientId: process.env.APP_CLIENT_ID,
    emailClientSecret: process.env.APP_CLIENT_SECRET,
    emailRefreshToken: process.env.APP_REFRESH_TOKEN,
  }
});
