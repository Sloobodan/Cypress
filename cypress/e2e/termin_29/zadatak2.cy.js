const sauce_data = require('../../fixtures/saucedemo.json')

describe("Test removing items from cart", () => {
    beforeEach(() => {
        cy.visit('www.saucedemo.com')
        cy.login(sauce_data.standard_user, sauce_data.password)
        // dodaj proizvod u korpu i proveri da je dodat
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('exist')
        cy.get('.shopping_cart_link').should('have.text', '1')
    })

    describe("when on the home page", () => {
        it("remove one item", () => {
            // ukloni proizvod iz korpe
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()

            // provera da proizvod vise nije u korpi
            cy.get('.shopping_cart_badge').should('not.exist')
            cy.get('.shopping_cart_link').should('have.text', '')
        })

        it("remove two items", () => {
            // dodaj jos jedan proizovd
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            
            // provera da su dva proizvoda dodata
            cy.get('.shopping_cart_badge').should('exist')
            cy.get('.shopping_cart_link').should('have.text', '2')

            // ukloni jedan proizvod iz korpe i proveri da je uklonjen
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_link').should('have.text', '1')

            // ukloni drugi proizvod iz korpe i proveri da je uklonjen
            cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
            cy.get('.shopping_cart_badge').should('not.exist')
            cy.get('.shopping_cart_link').should('have.text', '')
        })
    })

    describe("when on the cart page", () => {
        it("remove one item", () => {
            // pregled korpe
            cy.get('.shopping_cart_link').click()
            cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
            cy.get('.cart_item').should('have.length', 1)

            // ukloni proizvod iz korpe
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()

            // provera da proizvod vise nije u korpi
            cy.get('.cart_item').should('not.exist')
            cy.get('.shopping_cart_badge').should('not.exist')
            cy.get('.shopping_cart_link').should('have.text', '')
        })
    })

    describe("on item page", () => {
        it("remove one item", () => {
            // otvori korpu
            cy.get('.shopping_cart_link').click()

            // otvori stranicu proizvoda i ukloni ga iz korpe
            cy.contains('Sauce Labs Backpack').click()
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()

            // provera da dugme Remove vise ne postoji i da se pojavilo dugme Add to cart 
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist')

            // provera da proizvod vise nije u korpi
            cy.get('.shopping_cart_badge').should('not.exist')
            cy.get('.shopping_cart_link').should('have.text', '')
        })
    })
})