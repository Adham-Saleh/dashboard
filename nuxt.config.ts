// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-04",
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@vee-validate/nuxt",
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-schema-org",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
  ],
  site: {
    url: "http://localhost:3000/",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  robots: {
    mergeWithRobotsTxtPath: "robots.txt",
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
    },
    strategy: "no_prefix",
    baseUrl: "https://your-production-url.com", // Replace with your actual production URL
    locales: [
      {
        code: "en",
        language: "en-US",
        iso: "en-US",
        name: "English",
      },
      {
        code: "ar",
        language: "ar-EG",
        iso: "ar-EG",
        name: "Arabic",
      },
    ],
    lazy: true,
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "users dashboard",
      logo: "/", // will resolve to canonical URL + /logo.png
      sameAs: [
        "https://x.com/nuxt_js",
        "https://www.linkedin.com/showcase/nuxt-framework/",
        "https://github.com/nuxt",
      ],
    },
  },
  elementPlus: {
    /** Options */
  },
  image: {
    domains: ["firebasestorage.googleapis.com", "fakeapi.platzi.com"],
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.escuelajs.co/graphql",
    },
  },
  "graphql-client": {
    watch: true,
    autoImport: true,
    functionPrefix: "Gql",
    documentPaths: ["./graphql"],
    preferGETQueries: false,
  },
  plugins: ["~/plugins/element-plus.js"],
  css: ["bootstrap-icons/font/bootstrap-icons.css", "~/assets/global.css"],
  app: {
    head: {
      charset: "utf-8",

      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      meta: [
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "Dashboard app" },
        { name: "msapplication-TileColor", content: "#2b5797" },
        {
          name: "msapplication-TileImage",
          content: "/icons/tile-icon-144x144.png",
        },
        {
          name: "msapplication-wide310x150logo",
          content: "/icons/wide-tile-icon-310x150.png",
        },
      ],

      // add the canonical public link
      link: [
        {
          rel: "canonical",
          href: "",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
        },
        {
          rel: "stylesheet",
          href: "~/assets/global.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
