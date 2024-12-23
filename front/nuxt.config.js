const dotenv = require("dotenv");

const isDev = process.env.NODE_ENV !== "production";

dotenv.config();

module.exports = {
  ssr: true,
  debug: true,

  components: isDev,

  storybook: {
    modules: {
      exclude: ["svg-sprite"],
    },
  },

  ...(!isDev && {
    modern: "client",
  }),

  telemetry: false,

  build: {
    analyze: isDev,
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },

    optimizeCss: false,
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    optimization: {
      minimize: !isDev,
    },
    extractCSS: {
      ignoreOrder: true,
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization = {
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /\/node_modules\//,
                name: "vendor",
                chunks: "all",
              },
            },
          },
        };
      }
    },
    postcss: {
      plugins: {
        cssnano: {
          preset: [
            "advanced",
            {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },

        "postcss-pxtorem": {
          propList: ["*"],
        },
      },
      preset: {
        browsers: "cover 99.5%",
        autoprefixer: true,
      },
      order: "cssnanoLast",
    },
  },

  server: {
    host: "0.0.0.0",
  },

  css: [
    "@/assets/styles/main.less",
    "@/node_modules/element-ui/lib/theme-chalk/tooltip.css",
    "@/node_modules/element-ui/lib/theme-chalk/select.css",
    "@/node_modules/element-ui/lib/theme-chalk/date-picker.css",
    "@/node_modules/element-ui/lib/theme-chalk/time-picker.css",
    "@/node_modules/element-ui/lib/theme-chalk/slider.css",
    "@/node_modules/element-ui/lib/theme-chalk/select-dropdown.css",
  ],

  plugins: [
    "@/plugins/general.js",
    "@/plugins/api.js",
    "@/plugins/libs/element-ui.js",
    "@/plugins/blocks.js",
    "@/plugins/libs/vue-the-mask.js",
    { src: "@/plugins/libs/vuelidate.js", ssr: true },
    { src: "@/plugins/escape-directive.js", ssr: false },
    { src: "@/plugins/libs/click-outside.js", ssr: false },
    { src: "@/plugins/libs/vue-snip.js", ssr: false },
    { src: "@/plugins/constants.js" },
  ],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
    // "@nuxtjs/auth-next",
    // "@nuxtjs/recaptcha",
    "cookie-universal-nuxt",
    "@nuxtjs/yandex-metrika",
  ],

  dayjs: {
    locales: ["ru"],
    defaultLocale: "ru",
  },

  axios: {
    credentials: false,
    baseURL: process.env.API,
  },

  buildModules: [
    "@nuxtjs/svg-sprite",
    "@nuxtjs/device",
    "@nuxt/image",
    "@nuxtjs/style-resources",
    "@nuxt/postcss8",
    "@nuxtjs/stylelint-module",
  ],

  styleResources: {
    less: [
      "@/assets/styles/breakpoints.less",
      "@/assets/styles/variables.less",
      "@/assets/styles/tools.less",
      "@/assets/styles/utils.less",
    ],
  },

  stylelint: {
    fix: true,
    cache: true,
    files: [
      "assets/**/*.{s?(a|c)ss,less}', '{components,layouts,pages}/**/*.less",
    ],
  },

  device: {
    refreshOnResize: true,
  },

  render: {
    resourceHints: false,
    etag: false,
    static: {
      etag: false,
    },
  },

  router: {
    base: "/",
    prefetchLinks: false,
  },

  pageTransition: "page",

  head: {
    title: "SkyPaws - школа дополнительного образования",

    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    meta: [
      {
        property: "og:image",
        hid: "og:image",
        name: "og:image",
        content: "/sharing.png",
      },
      {
        property: "og:image:width",
        content: "1024",
      },
      {
        property: "og:image:height",
        content: "512",
      },
      {
        name: "twitter:title",
        content: "SkyPaws - школа дополнительного образования",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        property: "og:title",
        content: "SkyPaws - школа дополнительного образования",
      },
      {
        property: "og:description",
        content:
          "Откройте уникальную школу, где дети смогут развивать свои навыки в пилотировании дронов, программировании и дизайне! Присоединяйтесь к нам и начните свой прибыльный бизнес уже сегодня — мы обеспечим Вас всем необходимым для успешного старта!",
      },
    ],
  },

  loading: {
    color: "#e31e24",
    failedColor: "#a04bc8",
  },

  loadingIndicator: {
    color: "#e31e24",
  },

  yandexMetrika: {
    id: "98958407",
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },

  svgSprite: {
    input: "~/assets/images/icons",
  },

  publicRuntimeConfig: {
    API: process.env.API,

    recaptcha: {
      siteKey: process.env.RECAPTCHA_SITE_KEY,
    },
  },
};
