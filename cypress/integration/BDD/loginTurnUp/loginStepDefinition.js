// Import necessary Cypress functions and commands
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './POMloginTurnUp';

// Define the step definitions using Cucumber's Given, When, Then syntax

// Given step: Navigate to the Turnup portal
Given('the user is navigate to Turnup portal', () => {
    LoginPage.loadHomePage();
});

// When step: Input the username
When('the user input username', () => {
    LoginPage.userName();
});

// When step: Input the password
When('the user input password', () => {
    LoginPage.password();
});

// When step: Click the login button
When('the user clicks the login button', () => {
    
    LoginPage.loginButton();
});

// Then step: Assert that they are redirected to the dashboard
Then('they should be redirected to the dashboard', () => {
    LoginPage.dashboard();
});
