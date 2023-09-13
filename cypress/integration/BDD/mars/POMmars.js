
export default class LoginPage{

    static loadHomePage(){

        cy.visit("http://localhost:5000/Home");

    }
    static enterUsername(){

        cy.get('.right > .item').click();
        cy.wait(2000)
        cy.get(':nth-child(2) > input').type("zlatan@yahoo.com");

    }
    static enterPassword(){
        cy.get(':nth-child(3) > input').type("cypress");
    }
    static loginButton(){

        cy.get('.fluid').click(); // Assuming the Login button has a class of 'btn'
    }
    static dashboard(){

        cy.get('[href="/Account/Dashboard"]').should('have.text','Dashboard')
    }


}