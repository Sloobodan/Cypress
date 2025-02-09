const sauce_data = require('../../fixtures/saucedemo.json')
const customer = sauce_data.customer

describe("Shopping Process", () => {
    beforeEach(() => {
        cy.visit('www.saucedemo.com')
        cy.login(sauce_data.standard_user, sauce_data.password)
    })

    describe("successfully buying", () => {
        it("one item", () => {
            // izaberi proizvod i zapocni proces kupovine
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_link')
                .should('have.text', '1')
                .click()
            
            // provera koliko proizvoda je odabrano
            cy.get('.cart_item')
                .should('have.length', 1)

            // provera naziva i kolicine odabranih proizvoda
            cy.get('#item_4_title_link > .inventory_item_name')
                .should('have.text', 'Sauce Labs Backpack')

            cy.get(':nth-child(3) > .cart_quantity')
                .should('have.text', '1')

            cy.get('[data-test="checkout"]').click()

            // unos podataka kupca
            cy.fillShoppingForm(customer.first_name, customer.last_name, customer.postal_code)

            // provera naslova i konacnog iznosa
            cy.get('.title')
                .should('have.text', 'Checkout: Overview')
            
            cy.get('.summary_subtotal_label')
                .should('have.text', 'Item total: $29.99')

            cy.get('.summary_tax_label')
                .should('have.text', 'Tax: $2.40')

            cy.get('.summary_total_label')
                .should('have.text', 'Total: $32.39')

            // zavrsetak kupovine
            cy.get('[data-test="finish"]').click()
            cy.get('.title')
                .should('have.text', 'Checkout: Complete!')
        })

        it("two items", () => {
            // izaberi proizvode i zapocni proces kupovine
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

            cy.get('.shopping_cart_link')
                .should('have.text', '2')
                .click()
            
            // provera koliko proizvoda je odabrano
            cy.get('.cart_item')
                .should('have.length', 2)

            // provera naziva i kolicine odabranih proizvoda <-- da li moze ovde da se pojavi neki problem ?
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
            cy.fillShoppingForm(customer.first_name, customer.last_name, customer.postal_code)

            // provera naslova i konacnog iznosa
            cy.get('.title')
                .should('have.text', 'Checkout: Overview')
            
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
    });

    describe("failed when", () => {
        it("no items are selected", () => {
            cy.get('.shopping_cart_link').click()
    
            cy.get('.cart_item').should('not.exist')
            cy.get('[data-test="checkout"]').click()        // Bitno: ovde bi inace test trebao da padne tj. shopping process ima bag jer dozvoljava da se odradi kupovina kada je prazna korpa
                                                            // ovde bi isla asertacija npr. button checkout je disabled ili neka poruka (alert) se prikazuje
                                                            // mi nastavljamo proces zbog vezbe
            // unos podataka kupca
            cy.fillShoppingForm(customer.first_name, customer.last_name, customer.postal_code)

            // provera naslova i konacnog iznosa
            cy.get('.title').should('have.text', 'Checkout: Overview')
            
            cy.get('.summary_subtotal_label')
                .should('have.text', 'Item total: $0')

            cy.get('.summary_tax_label')
                .should('have.text', 'Tax: $0.00')

            cy.get('.summary_total_label')
                .should('have.text', 'Total: $0.00')

            // zavrsetak kupovine
            cy.get('[data-test="finish"]').click()
            cy.get('.title').should('have.text', 'Checkout: Complete!')
        })
    });
})