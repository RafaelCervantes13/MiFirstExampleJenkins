const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
  },

  env: {
    resolutions: ["iphone-x", "macbook-13", "macbook-15", [1024, 768]],
  },

  chromeWebSecurity: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
