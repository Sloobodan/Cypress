Cypress.Commands.add('addFault', (Mesto, Kvar) => {

    cy.get('#dodaj > .btn').click();
    cy.get('#mesto').clear().type(Mesto);
    cy.get('#opis').clear().type(Kvar);
    cy.get('#odgovorno_lice').click();
    cy.get('#button_3').click();
    cy.get('#submit').click();

});