module.exports = {
  extends: [
    "stylelint-config-rational-order-fix",
    "stylelint-config-standard-less",
    "stylelint-config-recommended-vue",
  ],
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.less", "**/*.less"],
    },
  ],

  plugins: ["stylelint-order", "stylelint-config-rational-order-fix/plugin"],
  rules: {
    "selector-class-pattern": [
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(_[a-z0-9]([-]?[a-z0-9]+)*)?(_[a-z0-9]([-]?[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
        message: "Invalid BEM selector format",
      },
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["ymaps"],
      },
    ],

    "no-invalid-double-slash-comments": true,
    "block-no-empty": null,
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "if",
          "else",
          "function",
          "return",
          "for",
          "at-root",
          "use",
          "each",
        ],
      },
    ],
    "declaration-empty-line-before": "never",
    "no-descending-specificity": null,
  },
};
