const buildingsData = require('../../fixtures/buildingsData.json')
const loginData = require('../../fixtures/loginData.json')
const pogresno = buildingsData.pogresno
const msg = require('../../fixtures/message.json')


describe('Testiranje forme za dodavanje zgrade', () => {
    beforeEach(() => {

        cy.loginForm(loginData.admin, loginData.password)
            .url()
            .should('eq', 'http://localhost:8080/pocetna')

        cy.get('#opcije')
            .should('be.visible')


        cy.get('#opcije > :nth-child(1) > a')
            .should('have.text', 'Zgrade')
            .click()

    })

    describe('Pozitivno testiranje', () => {
        it('Pozitivno dodavanje', () => {

            cy.buildingsForm(buildingsData.mesto, buildingsData.ulica, buildingsData.broj, buildingsData.brojStanova)
            cy.get('button[type="submit"]')
                .click()


            cy.get('.toast-message')
                .should('be.visible')
                .and('have.text', msg.successfulBuilding)


            cy.get(':nth-child(2) > .btn > b')
                .click()
                .then(() => {
                    cy.contains('a', 'Cara Dusana').should('be.visible');
                })
        })

    });
    //Prva dva testa padaju jer app dozvoljava unos i samih brojeva za mesto i ulicu
    describe('Negativno testiranje', () => {
        it('Neispravno mesto', () => {

            cy.buildingsForm(pogresno.pogresno_mesto, buildingsData.ulica, buildingsData.broj, buildingsData.brojStanova)

            cy.get('button[type="submit"]')
                .should('be.disabled')


        })


        it('Neispravna ulica', () => {

            cy.buildingsForm(buildingsData.mesto, pogresno.pogresna_ulica, buildingsData.broj, buildingsData.brojStanova)

            cy.get('button[type="submit"]')
                .should('be.disabled')


        })


        it('Neispravan broj', () => {

            cy.buildingsForm(buildingsData.mesto, buildingsData.ulica, pogresno.pogresan_broj, buildingsData.brojStanova)

            cy.get('button[type="submit"]')
                .should('be.disabled')

        })

        it('Neispravan brojStanova', () => {

            cy.buildingsForm(buildingsData.mesto, buildingsData.ulica, buildingsData.broj, pogresno.pogresan_brojStanova)

            cy.get('button[type="submit"]')
                .should('be.disabled')

        })
        describe("Testiranje varijacija sa praznim poljima", () => {
            it("prazno polje za mesto", () => {
                cy.buildingsForm("{backspace}", buildingsData.ulica, buildingsData.broj, buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')
                    .and('have.text', msg.failedLogin)

                cy.get('button[type="submit"]')
                    .should('be.disabled')


                // cy.get('[data-test="error"]')
                //     .should('have.text', 'Error: First Name is required')

                // cy.get('[data-test="firstName"]')
                //     .should("have.class", "error")
                //     .should("have.attr", "placeholder", "First Name")

                // cy.get('[data-test="lastName"]')
                //     .should("have.class", "error")
                //     .should("have.value", customer.last_name)

                // cy.get('[data-test="postalCode"]')
                //     .should("have.class", "error")
                //     .should("have.value", customer.postal_code)

            })

            it("prazno polje za ulicu", () => {
                cy.buildingsForm(buildingsData.mesto, "{backspace}", buildingsData.broj, buildingsData.brojStanova)


                // cy.get('#mesto')
                //     .should("have.class", "invalid-feedback")

                //  cy.get('.invalid-feedback')
                //     .and ('have.text', msg.failedLogin)

                ///TREBA PROVERITI DAL JE DUGME DISABLED


                cy.get('.invalid-feedback')
                    .should('be.visible')
                    .and('have.text', msg.failedLogin)

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })


            it("prazno polje za broj", () => {
                cy.buildingsForm(buildingsData.mesto, buildingsData.ulica, "{backspace}", buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')
                    .and('have.text', msg.failedLogin)

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })
            
            // test pada jer se ne pojavljuje poruka kad se ne unese broj stanova a ostala polja se unesu redovno pre njega
            // sa izbacenom porukom test bi prosao, ali ne znam da li je to pametno odnosno da li je to ok ponasanje app
            it("prazno polje za brojStanova", () => {
                cy.buildingsForm(buildingsData.mesto, buildingsData.ulica, buildingsData.broj, "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')
                    .and('have.text', msg.failedLogin)

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            // u sledecim testovima nije prakticno proveravati poruku jer bi se dve poruke o greski prikazu 
            // i spoje u jednu pa je ocekivana poruka sledeca: Ovo polje ne sme biti prazno!Ovo polje ne sme biti prazno! a bezveze je to pisati u assert
            // dovoljno je da je poruka visible
            it("prazno polje za mesto i ulicu", () => {
                cy.buildingsForm("{backspace}", "{backspace}", buildingsData.broj, buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })


            it("prazno polje za mesto i broj", () => {
                cy.buildingsForm("{backspace}", buildingsData.ulica, "{backspace}", buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            it("prazno polje za mesto i broj stanova", () => {
                cy.buildingsForm("{backspace}", buildingsData.ulica, buildingsData.broj, "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })


            it("prazno polje za ulicu i broj", () => {
                cy.buildingsForm(buildingsData.mesto, "{backspace}", "{backspace}", buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })


            it("prazno polje za ulicu i broj stana", () => {
                cy.buildingsForm(buildingsData.mesto, "{backspace}", buildingsData.broj, "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            it("prazno polje za mesto, ulicu i broj", () => {
                cy.buildingsForm("{backspace}", "{backspace}", "{backspace}", buildingsData.brojStanova)

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            it("prazno polje za mesto, ulicu i broj stana", () => {
                cy.buildingsForm("{backspace}", "{backspace}", buildingsData.broj, "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            it("prazno polje za mesto, broj i broj stana", () => {
                cy.buildingsForm("{backspace}", buildingsData.ulica, "{backspace}", "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })

            it("prazno polje za broj, ulicu i broj stana", () => {
                cy.buildingsForm(buildingsData.mesto, "{backspace}", "{backspace}", "{backspace}")

                cy.get('.invalid-feedback')
                    .should('be.visible')

                cy.get('button[type="submit"]')
                    .should('be.disabled')

            })
        })
    })

});