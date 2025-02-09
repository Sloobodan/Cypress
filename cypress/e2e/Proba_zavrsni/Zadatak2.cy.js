const buildingsData = require ('../../fixtures/buildingsData.json')
const loginData = require ('../../fixtures/loginData.json')
const wrongPasswordLogin = loginData.wrong_password
const pogresno = buildingsData.pogresno
const msg = require ('../../fixtures/message.json')


describe('Testiranje forme za dodavanje zgrade', () => {
    beforeEach(() => {
     
        cy.loginForm(loginData.admin, loginData.password)
            .url()
            .should('eq', 'http://localhost:8080/pocetna')

        cy.get('#opcije')
            .should('be.visible')
        

        cy.get('#opcije > :nth-child(1) > a')
            .should('contain', 'Zgrade')
            .click()

        cy.get(':nth-child(2) > .btn > b')
            .should('not.be.disabled')
            .click()


        cy.contains('a', 'Boska Buhe')
            .should('be.visible')
            .click()

        cy.get(':nth-child(1) > td.col-md-2 > .btn')
            .should('have.text', 'Vlasnik i stanari')
            .and('not.be.disabled')
            .click()
    })

    it ('Postavljanje vlasnika iz tabele korisnici', () => {

        cy.get(':nth-child(1) > .col-md-5 > :nth-child(1) > .btn')
            .should('have.text', 'Postavi za vlasnika')
            .and('not.be.disabled')
            .click()

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulOwner)

        //odmah promena na drugog vlasnika
        cy.get(':nth-child(5) > .col-md-5 > :nth-child(1) > .btn')
            .should('have.text', 'Postavi za vlasnika')
            .and('not.be.disabled')
            .click()

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulOwner)

        
    })


    it ('Postavljanje vlasnika iz tabele stanari', () => {

        cy.get(':nth-child(1) > .col-md-6 > :nth-child(2) > .btn')
            .should('have.text', 'Postavi za vlasnika')
            .and('not.be.disabled')
            .click()

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulOwner)

        //odmah promena na drugog vlasnika
        cy.get(':nth-child(2) > .col-md-6 > :nth-child(2) > .btn')
            .should('have.text', 'Postavi za vlasnika')
            .and('not.be.disabled')
            .click() 

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulOwner)

        
    })


    it ('Dodavanje novih stanara ', () => {

        cy.get(':nth-child(3) > .col-md-5 > :nth-child(2) > .btn')
            .should('have.text', 'Dodaj u stanare')
            .and('not.be.disabled')
            .click()

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulTenant)

        //odmah promena na drugog vlasnika
        cy.get(':nth-child(5) > .col-md-5 > :nth-child(2) > .btn')
            .should('have.text', 'Dodaj u stanare')
            .and('not.be.disabled')
            .click()

        cy.get('.toast-success')
            .should('be.visible')
            .and('have.text', msg.successfulTenant)

        
    })

    it ('Postavljanje za predsednika ', () => {


    cy.get(':nth-child(3) > .col-md-6 > :nth-child(1) > .btn')
        .should('be.disabled')
        .click({ force: true })
        .should('not.be.focused')
        .and('be.disabled')

    })
})