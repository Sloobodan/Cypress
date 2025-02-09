describe("Checkout process - test customer information form", () => {
    // beforeEach(() => {
        
    // })

    describe("success checkout process", () => {
        it("valid data inserted", () => {
            // beforeEach
            cy.visit('localhost:8080');
            cy.viewport(1366, 768);
            cy.get('#email').clear().type("predSkup@gmail.com");
            cy.get('#lozinka').clear().type("Bar5slova");
            cy.get('.btn').click();

            cy.get(':nth-child(4) > a').click();
            cy.get(':nth-child(4) > .nav-link').click();



            //it za potrebe zadatka - dodavanje kvarova (izvuci u komandu i pozvati onoliko puta koliko nam treba novih kvarova)
            cy.get('#dodaj > .btn').click();
            cy.get('#mesto').clear().type("Mesto 1");
            cy.get('#opis').clear().type("Kvar 1");
            cy.get('#odgovorno_lice').click();
            cy.get('#button_3').click();
            cy.get('#submit').click();
            //cy.get('.toast-message').should('have.text', '\u00a0Kvar uspesno dodat\u00a0');  nece iz nekog razloga 
            cy.get('.toast-message').should('contain', 'Kvar uspesno dodat');
            cy.get(':nth-child(4) > .nav-link').click(); //mora opet klik na sve kvarove



            //it test za checkbox tek sad ide
            cy.get('label > .ng-valid').not('[disabled]').check().should('be.checked');
            //i ovde nemamo otkjucan deo aplikacije gde menajamo status kvara gde ce verovatno biti dase odabere da li je
            //kvar zavrsen ili ne i onda bi tek mogle neke asertacije da su na stranici vidljivi samo oni kvarovi koji su
            //zavrseni a nisam odma siguran kako bismo sve to tacno potvrdili

        })
    })

})