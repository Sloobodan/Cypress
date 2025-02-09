describe('Wikipedias', () => {
    it('Does the search work?', () => {
        // Visits the wikipedia
        cy.visit('https://www.wikipedia.org/')

        cy.url().should('include', 'wikipedia.org')

        cy.get('#searchInput')
            .clear()
            .type('Cypress')
            .should('have.value', 'Cypress')
            .type('{enter}')



        cy.url().should('include', '/wiki/Cypress')

        cy.get('.mw-page-title-main')
            .should('have.text', 'Cypress')
 
            

 
    });
})



   