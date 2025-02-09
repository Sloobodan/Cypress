const loginData = require ('../../fixtures/loginData.json')

describe("Testirati dropdown na stranici kvarovi ", () => {
    beforeEach(() => {
                
        cy.loginForm(loginData.predsednik, loginData.password)
            .url()
            .should('eq', 'http://localhost:8080/pocetna')

        
        cy.get(':nth-child(4) > a')
            .click()
        cy.url().should('eq','http://localhost:8080/zgrada/1/obavestenja')

        cy.get(':nth-child(4) > .nav-link')
            .click()

        cy.url().should('eq','http://localhost:8080/zgrada/1/kvarovi')

        // cy.get('#zgradaStanuje')                            // Select the table
        //     .find('tr')                                     // Find all table rows
        //     .eq(1)                                          // Select the second row (index starts from 0)
        //     .find('a[href="/zgrada/1"]')                    // Find the button with the specified href
        //     .click(); 

      });
    it("Testirati dropdown na stranici Kvarovi", () => {

      
        
        cy.get('.nav-link[href="/zgrada/1/kvarovi"]').click()
        //cy.get('#prikaz').contains('2').should('be.selected');
        // cy.get('#prikaz').select('[value="2"]');



         cy.get('#prikaz').select("2")
            .should('have.value', '2')


        cy.get('div.ng-star-inserted').its('length').should('eq', 2)

        //cy.get('app-kvarovi').find('div').its('length').should('eq', 2);
        

        // cy.get('div.ng-star-inserted').should('have.length', 2);





        // cy.get('#kvar_4').should('be.visible')
        // cy.get('#kvar_2').should('not.exist')

        
    })


    // it("Testirati dropdown na stranici Kvarovi", () => {
    //     cy.get('.nav-link[href="/zgrada/1/kvarovi"]').click().then(() => {
    //         cy.get('#prikaz').select("2");
    //         cy.get('#prikaz').should('have.value', '2');
    //         // cy.get('app-kvarovi').find('div').should('have.length', 2 );
    //         cy.get('app-kvarovi').find('div[id^="kvar_"]').should('have.length', 2);

    //       });

    
    it.only("Testirati dropdown na stranici Kvarovi sa 6", () => {
            cy.get('.nav-link[href="/zgrada/1/kvarovi"]').click().then(() => {
                cy.get('#prikaz').select("10");
                cy.get('#prikaz').should('have.value', '10');
                // cy.get('app-kvarovi').find('div').should('have.length', 2 );
                cy.get('app-kvarovi').find('div[id^="kvar_"]').should('have.length', 6);
    
              });
            
        })
          
    })

  
