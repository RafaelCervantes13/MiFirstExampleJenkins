const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    reportDir: 'cypress/reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
