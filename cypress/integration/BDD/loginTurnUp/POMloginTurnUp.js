
export default class LoginPage{

    static loadHomePage(){
       
        
        cy.visit("http://horse.industryconnect.io/Account/Login?ReturnUrl=%2f");


    }
    static userName(){

        cy.get("#UserName").type("hari");

    }
    static password(){

        cy.get("#Password").type("123123");
    }
    static loginButton(){

        cy.get(".btn").click(); // Assuming the Login button has a class of 'btn'
    }
    static dashboard(){

        cy.get('[style="font-size:13px"] > :nth-child(1) > a').should('have.text','Dashboard')
        
    }
    


}





