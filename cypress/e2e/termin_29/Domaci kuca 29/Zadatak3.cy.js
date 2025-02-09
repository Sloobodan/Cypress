const souce_demo = require('../../../fixtures/saucedemo.json')
const invalid_data = require ('../../../fixtures/invalid_data.json')
const customer = souce_demo.customer

describe('Login Form tests', () => {
    beforeEach(() => {

        cy.loginForm(souce_demo.standard_user, souce_demo.password)
        cy.url().should('include', '/inventory.html')

        cy.get('.app_logo')
        .should('have.text', souce_demo.h1)

        cy.get('.shopping_cart_link')
            .click()

        cy.get('[data-test="checkout"]')
            .click()
    });


    describe('Positive tests', () =>{

        it('Logging in with all correct credentials', () =>{

            cy.checking(customer.first_name, customer.last_name, customer.postal_code )

            cy.url('contains', '/checkout-step-two.html')

            cy.get('.title')
                .should('have.text' , souce_demo.title)

            cy.get('[data-test="finish"]')
                .should('exist')
                .and('have.text', 'Finish')
        })
    });

    describe('Negative tests', () =>{

        it('Checking information with a wrong firstName', () =>{

            cy.checking(invalid_data.wrong_firsName, customer.last_name, customer.postal_code)

            cy.url('not.include', '/checkout-step-two.html')

            cy.get('.title')
                .should('not.exist');
                should('not.be.visible')

            cy.get('[data-test="finish"]')
                .should('not.exist')
                //should('not.be.visible') Koji je bolji nacin za proveru od ova dva?
        })

   

        it('Checking information with a wrong lastName', () =>{

            cy.checking(customer.first_name, invalid_data.wrong_lastName, customer.postal_code)

            cy.url('not.include', '/checkout-step-two.html')

            cy.get('.title')
                .should('not.exist');
                should('not.be.visible')

            cy.get('[data-test="finish"]')
                .should('not.exist')
                //should('not.be.visible') Koji je bolji nacin za proveru od ova dva?
        })

        it('Checking information with a wrong postalCode', () =>{

            cy.checking(customer.first_name, customer.last_name, invalid_data.wrong_postalCode)

            cy.url('not.include', '/checkout-step-two.html')

            cy.get('.title')
                .should('not.exist');
                should('not.be.visible')

            cy.get('[data-test="finish"]')
                .should('not.exist')
                //should('not.be.visible') Koji je bolji nacin za proveru od ova dva?
        })


        it('Checking information with a empty firstName', () =>{

            cy.checking(('{backspace}'), customer.last_name, customer.postal_code)

            cy.get('.error-message-container')
                .should('have.text', 'Error: First Name is required')

           
                
            

        })
    });


});