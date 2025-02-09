const loginData = require ('../../fixtures/loginData.json')


   describe("Checkout process - test customer information form", () => {
     beforeEach(() => {
        
        cy.loginForm(loginData.predsednik, loginData.password)
            .url()
            .should('eq', 'http://localhost:8080/pocetna')

        
        cy.get(':nth-child(4) > a')
            .click();

        cy.get(':nth-child(4) > .nav-link')
            .click();

        cy.addFault('Neko mesto', 'Neki kvar')
          
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', ' Kvar uspesno dodat ')

        cy.get(':nth-child(4) > .nav-link')
            .click()
    })

    describe("success checkout process", () => {
        it("valid data inserted", () => {


            
            cy.get('label > .ng-valid').not('[disabled]').check().should('be.checked');
            //i ovde nemamo otkjucan deo aplikacije gde menajamo status kvara gde ce verovatno biti dase odabere da li je
            //kvar zavrsen ili ne i onda bi tek mogle neke asertacije da su na stranici vidljivi samo oni kvarovi koji su
            //zavrseni a nisam odma siguran kako bismo sve to tacno potvrdili

        })
    })

})