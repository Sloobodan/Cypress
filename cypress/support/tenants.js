Cypress.Commands.add('tenantsAdd_Form', (email, password, ime, prezime) => {
    // cy.visit('http://localhost:8080')

    cy.get('#email')
        .clear()
        .type(email)

    cy.get('#lozinka')
        .clear()
        .type(password)


    cy.get('#ime')
        .clear()
        .type(ime)

    cy.get('#prezime')
        .clear()
        .type(prezime)

    cy.get('button[type="submit"]')
        .click()


    // cy.get('.btn-danger')
})




 