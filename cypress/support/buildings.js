Cypress.Commands.add('buildingsForm', (mesto, ulica, broj, brojStanova) => {

    cy.get('#mesto')
        .clear()
        .type(mesto)

    cy.get('#ulica')
        .clear()
        .type(ulica)


    cy.get('#broj')
        .clear()
        .type(broj)

    cy.get('#brojStanova')
        .clear()
        .type(brojStanova)

    // cy.get('button[type="submit"]')
    //     .click()


     //cy.get('.btn-danger')
})




    