Cypress.Commands.add('loginForm', (email, password) => {
    cy.visit('http://localhost:8080')

    cy.get('#email')
        .clear()
        .type(email)

    cy.get('#lozinka')
        .clear()
        .type(password)

    cy.get('.btn')
        .click()
})




    //  cy.get('[data-test="username"]')
    //      .clear({ force: true })
    //     .type('', { force: true });

    // cy.get('[data-test="username"]')
    //     .clear()
    //     .invoke('val', email);
      
      

    // cy.get('[data-test="password"]')
    //      .clear({ force: true })
    //     .type('', { force: true });

    // cy.get('[data-test="password"]')
    //     .clear()
    //     .invoke('val', password);
      
      