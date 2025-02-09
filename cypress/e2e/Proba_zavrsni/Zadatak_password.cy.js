const buildingsData = require ('../../fixtures/buildingsData.json')
const loginData = require ('../../fixtures/loginData.json')
const wrongPasswordLogin = loginData.wrong_password
const pogresno = buildingsData.pogresno
const msg = require ('../../fixtures/message.json')


describe('Testiranje forme za dodavanje zgrade', () => {
    beforeEach(() => {
     
        cy.loginForm(loginData.predsednik, loginData.password)
            .url()
            .should('eq', 'http://localhost:8080/pocetna')

        

        
    }) 

    it ('', () => {

    })
})

