module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:nuxt/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "import"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    "global-require": 0,
    "max-len": "off",
    "import/prefer-default-export": 0,
    "no-shadow": ["error", { allow: ["state"] }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "linebreak-style": 0,

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],

    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          "head",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "computed",
          "watch",
          "validations",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
        ],
      },
    ],

    "vue/new-line-between-multi-line-property": [
      "error",
      {
        minLineOfMultilineProperty: 2,
      },
    ],

    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
      },
    ],

    "vue/component-definition-name-casing": ["error", "PascalCase"],

    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],

    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],

    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },

  settings: {
    "import/core-modules": ["vue", "vuex"],
    "import/resolver": {
      node: {
        paths: ["."],
      },
      nuxt: {
        extensions: [".js", ".vue"],
      },
    },
  },
};
