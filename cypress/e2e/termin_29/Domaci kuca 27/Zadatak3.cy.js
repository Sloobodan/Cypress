describe('calculator', () => {
    it('Test the addition operation', () => {
        // Visits the wikipedia
        cy.visit('https://www.calculator.net/');

        cy.url().should('include', 'calculator.net/');

        // cy.get('a[href="/scientific-calculator.htmls"]').click()

        cy.contains('a', 'Scientific Calculator').should('exist').click();


        cy.url().should('include', '/scientific-calculator.html');


        cy.get('[onclick="r(1)"]').dblclick();
        // cy.get('#sciInPut').should('have.text', '\u00a011');
        cy.get('#sciInPut').invoke('text').should('match', /\s*11\s*/);

        


        cy.get('[onclick="r(\'+\')"]').click();
        // cy.get('#sciInPut').should('have.text', '\u00a011\u00a0+\u00a0');
        cy.get('#sciInPut').invoke('text').should('match', /\s*11\s*\+\s*/);

        

        cy.get('[onclick="r(2)"]').dblclick();
        cy.get('#sciInPut').invoke('text').should('match', /\s*11\s*\+\s*22\s*/);

        // cy.get('#sciInPut').invoke('text').should('eq', ' 11+22')
            


        cy.get('#sciOutPut').should('have.text', '\u00a033');





        // cy.get('#searchInput')
        //     .clear()
        //     .type('Cypress')
        //     .should('have.value', 'Cypress')
        //     .type('{enter}')



        // cy.url().should('include', '/wiki/Cypress')

        // cy.get('.mw-page-title-main')
        //     .should('have.text', 'Cypress')

       
 
            

 
    });
})

