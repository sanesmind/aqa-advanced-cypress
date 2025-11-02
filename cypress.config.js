const { defineConfig } = require("cypress");

module.exports = defineConfig({
    defaultBrowser: "Chrome",
    defaultCommandTimeout: 7000,
    retries: {
        runMode: 2,
        openMode: 0
    },
    e2e: {
        baseUrl: "https://qauto.forstudy.space",
        waitForFileChanges: false,
        specPattern: "cypress/e2e/**/*.{spec, test}.{js,jsx,ts,tsx}",
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
