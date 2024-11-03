const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9haw1x",
  e2e: {
    baseUrl: "http://localhost:5173",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
