const { defineConfig } = require("cypress");

module.exports = defineConfig({
   // defaultBrowser: "Chrome",
    watchForFileChanges: false,
    defaultCommandTimeout: 7000,
    retries: {
        runMode: 2,
        openMode: 0
    },
    e2e: {
        baseUrl: "https://qauto.forstudy.space",
        waitForFileChanges: true,
        specPattern: "cypress/e2e/**/*.test.{js,jsx,ts,tsx}",
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
