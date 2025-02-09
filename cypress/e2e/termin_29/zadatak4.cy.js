describe("Admin Demo - delete products", () => {
    beforeEach(() => {
        // prijava na stranicu kao admin
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.get('#Email')
            .clear()
            .type("admin@yourstore.com")

        cy.get('#Password')
            .clear()
            .type("admin")
        cy.contains('Log in').click()

        // navigacija na stranicu Products
        cy.contains('Catalog').click()
        cy.contains('Products').click()
    })

    it("delete all products from the first page", () => {
        // provera koliko proizvoda postoji i koliko je prikazano
        cy.get('#products-grid_info')
            .should('have.text', '1-15 of 45 items')

        // šta je problem sa ovim pristupom? -> na ovaj način označavamo sve checkbox na stranici 
        // nekad to može da bude rešenje, ali na ovoj stranici imamo još jedan checkbox koji ne treba da bude označen (forma iznad)
        // stranica koju testiramo ima u okviru tabele jedan checkbox koji označava sve, tako da možemo njega da iskoristimo
        // cy.get('[type="checkbox"]')
        //     .not('[disabled]')
        //     .check({ force: true })
        //     .should('be.checked')

        cy.get('.mastercheckbox')
            .first()
            .not('[disabled]')
            .check()

        cy.get('#delete-selected').click()     // obrisi oznacene proizvode
        cy.contains('Yes').click()             // potvrdi brisanje

        // provera da se obrisalo 15 proizvoda
        cy.get('#products-grid_info')
            .should('have.text', '1-15 of 30 items')
    })
})