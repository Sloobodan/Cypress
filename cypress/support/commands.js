// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Example of Custom Command
Cypress.Commands.add('signIn', (email, password) => {
    cy.visit('https://admin-demo.nopcommerce.com/login')

    cy.get('input[name=Email]')
        .clear()
        .type(email)

    cy.get('input[name=Password]')
        .clear()
        .type(password)

    cy.get('.button-1')
        .click()
});


Cypress.Commands.add('fillShoppingForm', (firstName, lastName, postalCode) => {    
    cy.get('[data-test="firstName"]')
        .clear()
        .type(firstName);

    cy.get('[data-test="lastName"]')
        .clear()
        .type(lastName);

    cy.get('[data-test="postalCode"]')
        .clear()
        .type(postalCode);

    cy.get('[data-test="continue"]').click()
});
