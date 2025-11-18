const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true,
    },
   // defaultBrowser: "Chrome",
    watchForFileChanges: false,
    defaultCommandTimeout: 7000,
    retries: {
        runMode: 2,
        openMode: 0
    },
    env:{
        login: "Dzheripa2@test.com",
        password: "testPass123",
    },
    e2e: {
        baseUrl: "https://qauto2.forstudy.space",
        waitForFileChanges: true,
        specPattern: "cypress/e2e/**/*.test.{js,jsx,ts,tsx}",
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
