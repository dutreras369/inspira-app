module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-essential",
      "prettier",
    ],
    parserOptions: {
      parser: "@babel/eslint-parser",
      requireConfigFile: false,
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  };
  