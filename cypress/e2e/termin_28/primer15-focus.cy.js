describe('Blur & Focus Demo', () => {
    it('cy.focus() - focus element', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('.action-focus')
            .focus()
            .should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;')
    })
})