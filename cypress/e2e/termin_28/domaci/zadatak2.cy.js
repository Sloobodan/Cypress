var sauce_data = require('../../../fixtures/saucedemo.json')

describe("Shopping Process", () => {
    beforeEach(() => {
        cy.visit('www.saucedemo.com')
        cy.login(sauce_data.standard_user, sauce_data.password)
    })

    it("standard user buying two items", () => {
        // izaberi proizvode i zapocni proces kupovine
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('.shopping_cart_link')
            .should('have.text', '2')
            .click()
        
        // provera koliko proizvoda je odabrano
        cy.get('.cart_item').should('have.length', 2)

        // provera naziva i kolicine odabranih proizvoda
        // da li moze ovde da se pojavi neki problem ?
        cy.get('#item_4_title_link > .inventory_item_name')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get(':nth-child(3) > .cart_quantity')
            .should('have.text', '1')

        cy.get('#item_0_title_link > .inventory_item_name')
            .should('have.text', 'Sauce Labs Bike Light')
            
        cy.get(':nth-child(4) > .cart_quantity')
            .should('have.text', '1')

        cy.get('[data-test="checkout"]').click()

        // unos podataka kupca
        cy.get('[data-test="firstName"]').type("Tester")
        cy.get('[data-test="lastName"]').type("Testic")
        cy.get('[data-test="postalCode"]').type("21000")
        cy.get('[data-test="continue"]').click()

        // provera naslova i konacnog iznosa
        cy.get('.title').should('have.text', 'Checkout: Overview')
        
        cy.get('.summary_subtotal_label')
            .should('have.text', 'Item total: $39.98')

        cy.get('.summary_tax_label')
            .should('have.text', 'Tax: $3.20')

        cy.get('.summary_total_label')
            .should('have.text', 'Total: $43.18')

        // zavrsetak kupovine
        cy.get('[data-test="finish"]').click()
        cy.get('.title').should('have.text', 'Checkout: Complete!')
    })
})