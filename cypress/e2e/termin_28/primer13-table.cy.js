describe('Test Table Demo', () => {
    describe('Test Basic Table', () => {
        beforeEach(() => {
            cy.visit('https://www.w3schools.com/html/html_tables.asp')
        })

        it('First Field First Row', () => {
            cy.get('#customers')
                .find('tr').first()
                .next()
                .find('td').first()
                .should('have.text', 'Alfreds Futterkiste')

            /* primer da smo imali button u tom polju
                    .find('button').as('myBtn')
                cy.get('@myBtn').click()
            */
        })

        it('Second Field Last Row', () => {
            cy.get('#customers')
                .find('tr')
                .last()
                .find('td')
                .first()
                .siblings().first()
                .should('have.text', 'Giovanni Rovelli')
        })

        it('Get nth column and nth element', () => {
            cy.get('#customers')
                .find('tr td:nth-child(2)')               // Uzimamo drugu kolonu
                .as("second-column")
                .should('have.length', 6)

            cy.get("@second-column")                      // Alias prethodno dobavljene kolone
                .eq(1)                                    // drugi element
                .should("have.text", "Francisco Chang")

        })

        it('Get nth column and specific element', () => {
            cy.get('#customers')
                .find('tr td:nth-child(2)')              
                .each((element, index, list) => {                            // prolazimo kroz listu elemenata druge kolone
                    const elementTitle = element.text();                     // uzimamo tekst elementa (tip je string)
                    if(elementTitle.includes("Yoshi")) {           // proveravamo da li element zadovoljava odredjeni uslov
                        expect(elementTitle).to.equal("Yoshi Tannamuri");  
                    }
                })
        })
    })
})