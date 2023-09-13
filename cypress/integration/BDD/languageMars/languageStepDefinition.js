
/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LanguagePage from './POMlanguage';



Given('I launch and log into MarsQA portal successfully', () => {
    LanguagePage.loadHomePage();
});

When('I add a new Language', () => {
    LanguagePage.addLanguage();

});
Then('Then new language should be added successfully', () => {

    LanguagePage.addedLanguage();

})

When('I edit a new Language', () => {
    LanguagePage.editLanguage();


    Then('Then new language should be edited successfully', () => {

        LanguagePage.editedLanguage();

    })

});


When('I delete a new Language', () => {
    LanguagePage.deleteLanguage();

})
Then('Then new language should be deleted successfully', () => {
    LanguagePage.deletedLanguage();
});










