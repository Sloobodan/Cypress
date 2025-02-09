Cypress.Commands.add('changePassword', (oldPassword, newPassword, confirmPassword) => {
    
    cy.get(':nth-child(3) > .nav-link')
        .click()

    cy.get('#staraLozinka')
        .clear()
        .type(oldPassword)

    cy.get('#novaLozinka')
        .clear()
        .type(newPassword)

    cy.get('#potvrdaNoveLozinke')
        .clear()
        .type(confirmPassword)

    cy.get('.center > .btn')
        .click()
})

