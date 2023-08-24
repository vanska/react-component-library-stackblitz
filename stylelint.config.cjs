/**
 * @type {import('stylelint').Config}
 **/
module.exports = {
  extends: ["stylelint-config-recommended"],
  plugins: [
    /**
     * @see https://github.com/RJWadley/stylelint-no-unsupported-browser-features
     */
    "stylelint-no-unsupported-browser-features",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        // browsers: [], // Config should be in .browserslistrc
        ignore: [
          "css-cascade-layers", // compiled by Tailwind
          "css-nesting", // compiled by Tailwind
          // "css-scrollbar",
        ],
        ignorePartialSupport: true,
      },
    ],
    // Ignore tailwinds theme() function
    "function-no-unknown": [true, { ignoreFunctions: ["theme"] }],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "responsive",
          "screen",
          "tailwind",
          "variants",
        ],
      },
    ],
    // "declaration-block-trailing-semicolon": null,
    // "no-descending-specificity": null,
  },
}
