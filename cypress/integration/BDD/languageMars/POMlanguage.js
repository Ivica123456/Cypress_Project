
export default class LanguagePage {

    static loadHomePage() {

        cy.visit("http://localhost:5000/Home");
        cy.viewport(1980, 800);
        cy.get('.right > .item').click();
        cy.wait(2000)
        cy.get(':nth-child(2) > input').type("zlatan@yahoo.com");
        cy.get(':nth-child(3) > input').type("cypress");
        cy.get('.fluid').click();


    }
    static addLanguage() {
        //Languages button
        cy.get('.top > .active').click();
        //Add button 
        cy.get('.ui.active > .row > .twelve > .form-wrapper > .fixed > thead > tr > .right > .ui').click();

        cy.fixture('languages.json').then((data) => {
            const languages = data.languages;

            // Loop through the language objects and perform actions
            languages.forEach((language) => {
                // Extract the language and level
                cy.wait(1000)
                const { name, level } = language;
                //  Cypress test actions using the language and level data
                cy.wait(1000)
                cy.get('input[name="name"]').clear().type(name);
                cy.get('select[name="level"]').select(level);
                cy.wait(1000)
                cy.get('.six > .teal').click();
                //Add button 
                cy.wait(1000)
                cy.get('.ui.active > .row > .twelve > .form-wrapper > .fixed > thead > tr > .right > .ui').click();


            });
        });





    }
    static addedLanguage() {

        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'EnglishFrench')


    }
    static editLanguage() {
        //Languages button
        cy.get('.top > .active').click();
        //edit button
        cy.wait(1000)
        cy.get(':nth-child(2) > tr > .right > :nth-child(1) > .outline').click();


        cy.fixture('editlanguages.json').then((data) => {
            const languages = data.languages;
            // Loop through the language objects and perform actions
            languages.forEach((language) => {
                // Extract the language and level
                const { name, level } = language;


                // Locate the input field for language name and clear any existing text, then type the new name
                cy.wait(1000)
                cy.get('input[name="name"]').clear().type(name);
                cy.wait(2000)
                cy.get('select[name="level"]').select(level);

                cy.wait(1000)
                cy.get('.buttons-wrapper > .teal').click();
                cy.wait(1000)
                cy.get(':nth-child(3) > tr > .right > :nth-child(1) > .outline').click();



            });
        });



    }
    static editedLanguage() {

        // Reload the page
        cy.reload();
        cy.get('tbody > tr > :nth-child(1)').should('have.text', 'CroatianBrazilian')



    }
    static deleteLanguage() {
        // Get all the "Delete" buttons in the table
        cy.get('.ui.active > .row > .twelve > .form-wrapper').each(($button) => {
            // Click the "Delete" button for each row
            cy.wrap($button).click();
            cy.wait(2000)

            cy.get('.remove').click({ multiple: true })
        });


    }
    static deletedLanguage() {

        // Assert that the table is empty by checking that no rows exist
        cy.reload();
        cy.get('.ui.fixed.table tbody').should('not.exist');


    }

}


