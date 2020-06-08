module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "parser": "'babel-eslint"
  },
  "extends": [
    // "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    // "plugin:nuxt/recommended",
    // "plugin:vue/essential",
    // "standard"
  ],
  "plugins": [
    "prettier", "vue"
  ],
  // add your custom rules here
  "rules": {
    // "nuxt/no-cjs-in-config": "off",
    "max-len": ["error", 500],
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    "vue/no-parsing-error": ["error", {
      "x-invalid-end-tag": true,
    }],
  },
}