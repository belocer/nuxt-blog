export default {
  mode: "universal",

  head: {
    title: "nuxt-blog",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["element-ui/lib/theme-chalk/index.css", "@/theme/index.scss"],

  plugins: ["@/plugins/globals"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "/",
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
  },

  loading: {
    color: "#8ff",
    height: "4px",
  },
};
