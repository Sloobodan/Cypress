describe('Test the checkout process', () => {

    beforeEach(() => {
        cy.loginForm('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')

        cy.get('.app_logo')
        .should('have.text', 'Swag Labs')
    })

    it('Product purchase verification', () => {
        
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .should('exist')
            .click()


        cy.get('.shopping_cart_link')
            .find('.shopping_cart_badge')
            .should('exist')
            .click()

        
        cy.get('[data-test="checkout"]')
            .should('have.text', 'Checkout')
            .click()


        cy.checking('slobodan', 'slobodan', '11000');

        cy.get('[data-test="finish"]')
            .should('have.text', 'Finish')
            .click()

        cy.get('.complete-header')
            .should('have.text', 'Thank you for your order!')

        cy.get('[data-test="back-to-products"]')
            .should('have.text', 'Back Home')
            .click()

        cy.url()
            .should('include', '/inventory.html')

        


        


        



   
        
    })
})

