const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  video: false,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true, 

    inlineAssets: true, //Adds the asserts inline
  },
 
 
 
  e2e: {
      setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      
      
    },
    specPattern: 'cypress/integration/BDD/*.feature',
    
    watchForFileChanges: false // Explicitly disable file watching
    
  },
});



