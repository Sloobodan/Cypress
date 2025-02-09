Cypress.Commands.add('president_failures', (email, password) => {
    

    cy.get('#mesto')
        .clear()
        .type(mesto)

    cy.get('#opis')
        .clear()
        .type(opis)


    cy.get('#odgovorno_lice')
        .click()

    

     //cy.get('.btn-danger')
})




    