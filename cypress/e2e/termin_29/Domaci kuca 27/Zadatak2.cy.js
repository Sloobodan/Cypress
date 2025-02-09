 describe('Wikivoyage', () => {
    it('Click on the new link', () => {
        // Visits the wikipedia
         cy.visit('https://www.wikipedia.org/')

         cy.url().should('include', 'wikipedia.org')

         cy.get('a[href="//www.wikivoyage.org/"]').should('exist').click()

 

//         // cy.get('a[href="//www.wikivoyage.org/"]').should('have.attr', 'href', 'https://www.wikivoyage.org/')
//         // cy.request('https://www.wikipedia.org/').then((response) => {
//         //     expect(response.status).to.eq(200)
//         //     expect(cy.url()).to.eq('https://www.wikivoyage.org/')
//         // })
//     });
 });

    it('Search on Wikivoyahe', () => {

        cy.visit('https://www.wikivoyage.org/');

        cy.url().should('include', 'wikivoyage.org');

        cy.get('#searchInput')
            .clear()
            .type('Cypress')
            .should('have.value', 'Cypress')
            .type('{enter}')

        cy.url().should('eq', 'https://en.wikivoyage.org/wiki/Cypress');
    });


// describe('Wikivoyage', () => {
//     it('Does the search work? And click on the new link', () => {
//       // Visits the wikipedia
//       cy.visit('https://www.wikipedia.org/')
  
//       cy.url().should('include', 'wikipedia.org')
  
//       cy.get('a[href="//www.wikivoyage.org/"]').should(($link) => {
//         const href = $link.prop('href')
//         expect(href).to.eq('/www.wikivoyage.org/') // Promenjeno na '/www.wikivoyage.org/'
//       }).click()
  
//       cy.url().should('include', 'wikivoyage.org') // Promenjeno na 'include' i provera samo putanje
//     });
//   })

//         //  ovako bi trebalo da moze ako se ne menja url
//     describe('Wikivoyage Search', () => {
//     it('Should perform search on Wikivoyage', () => {
//       cy.visit('https://www.wikipedia.org/')
  
//       // Click on the link to Wikivoyage
//        cy.get('a[href="//www.wikivoyage.org/"]').should('exist').click()
  
//        // Verify the URL has changed
//        cy.url().should('not.include', 'wikipedia.org')
  
//        // Perform search for 'Cypress'
//        cy.get('#searchInput')
//             .clear()
//             .type('Cypress')
//             .should('have.value', 'Cypress')
//             .type('{enter}')
  
//       // Verify the URL has changed
//       cy.url().should('eq', 'https://en.wikivoyage.org/wiki/Cypress');
// //     })
  });
  