// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@nuxt/image", "@nuxt/eslint"],
  routeRules: {
    "/**": { prerender: true },
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    smtpUser: process.env.SMTP_USER,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpHost: process.env.SMTP_HOST || "smtp.gmail.com",
    smtpPort: process.env.SMTP_PORT || "587",

    // Public keys (exposed to client-side)
    public: {
      // Add any public config here if needed
    },
  },
  app: {
    baseURL: "/",
    head: {
      script: [
        {
          // এখানে 'children' এর বদলে 'innerHTML' ব্যবহার করা হয়েছে
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6SRCPX6');`,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          // noscript এর ক্ষেত্রেও innerHTML ব্যবহার করা ভালো
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6SRCPX6"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: "bodyOpen",
        },
      ],
    },
  },
});
