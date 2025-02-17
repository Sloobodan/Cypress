describe('Testing Wikipedia', () => {
    it('search form', () => {
        // Visit  Wikipedia website
        cy.visit('https://www.wikipedia.org')

        // Enter value Cypress into input field
        cy.get("input[type='search']")
            .clear()
            .type('Cypress')

        // Click search button
        cy.get("button[type='submit']")
            .click()

        // Verify URL
        cy.url()
            .should('eq', 'https://en.wikipedia.org/wiki/Cypress')

        // Verify page title
        cy.title()
            .should('eq', "Cypress - Wikipedia")

        // Verify heading
        cy.get('#firstHeading')
            .should('have.text', 'Cypress')
    })
})