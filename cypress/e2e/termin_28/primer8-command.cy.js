describe('Admin Demo Testing With Custom Commands', () => {
    it('Login Test', () => {
        cy.signIn('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })

    it('Uspesno dodat kupac', () => {
        cy.log('add customer...')

        cy.signIn('admin@yourstore.com', 'admin')

        // dodavanje kupca
    })

    it('Edit Customer Test', () => {
        cy.log('edit customer...')

        cy.signIn('admin@yourstore.com', 'admin')

        // izmena kupca
    })

    it('Delete Customer Test', () => {
        cy.log('delete customer...')

        cy.signIn('admin@yourstore.com', 'admin')

        // brisanje
    })
})
