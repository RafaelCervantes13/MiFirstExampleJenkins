
const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        setupNodeEvents(on, config) {
            //implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
        excludeSpectPattern: "cypress/e2e/other/*.js",
        baseUrl: "https://webdriveruniversity.com/",
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
        supportFile: false,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 120000,
        env: {
            first_name : "Sarah"
        }
    },


    env: {
        resolutions: ['iphone-x', 'macbook-13', 'macbook-15', [1024, 768]],
      },


});