describe('Zadatak 2', () => {
    describe('Prvi nacin', ()=> {
        it('Testing Wikivoyage link', () => {
            // Visit the Wikipedia website
            cy.visit('https://www.wikipedia.org')
    
            // // Test Wikivoyage link
            cy.contains('Wikivoyage')
                .should('have.attr', 'href')
                .and('eq', '//www.wikivoyage.org/')
                
            // This will result with cross origin error if we dont use cy.origin()
            cy.contains('Wikivoyage')   
                .click()
            
            cy.origin('https://www.wikivoyage.org/', () => {
                cy.get('#searchInput')
                    .clear()
                    .type('Cypress')            
    
                cy.get('button[type="submit"]')
                    .click()
            })
        })
    })

    describe('Drugi nacin', ()=> {
        it('Testing Wikivoyage link', () => {
            // Visit the Wikipedia website
            cy.visit('https://www.wikipedia.org')
    
            // Test Wikivoyage link
            cy.contains('Wikivoyage')
                .should('have.attr', 'href')
                .and('eq', '//www.wikivoyage.org/')
    
            // This will result with cross origin error
            // cy.visit('https://www.wikivoyage.org')
        })

        it('Testing Wikivoyage search form', () => {
            // Visit the Wikivoyage website
            cy.visit('https://www.wikivoyage.org')
   
           // Enter value Cypress into input field
            cy.get('#searchInput')
               .clear()
               .type('Cypress{enter}')             // Option 1 - Press enter
   
           // Click search button                  // Option 2 - click search button
           // cy.get('button[type="submit"]')
           //    .click()
   
            // Verify URL
            cy.url()
                .should('eq', 'https://en.wikivoyage.org/wiki/Cypress')   

            // Verify Page title
            cy.title()
                .should('eq', "Cypress – Travel guide at Wikivoyage")     
        })
    })
})