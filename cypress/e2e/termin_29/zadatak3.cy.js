const sauce_data = require('../../fixtures/saucedemo.json')
const customer = sauce_data.customer

describe("Checkout process - test customer information form", () => {
    beforeEach(() => {
        cy.visit('www.saucedemo.com')
        cy.login(sauce_data.standard_user, sauce_data.password)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
    })

    describe("success checkout process", () => {
        it("valid data inserted", () => {
            cy.fillShoppingForm(customer.first_name, customer.last_name, customer.postal_code)

            cy.get('.title').should('have.text', 'Checkout: Overview')
        })
    })

    describe("fail checkout process when", () => {
        it("empty first name field", () => {
            cy.fillShoppingForm("{backspace}", customer.last_name, customer.postal_code)

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: First Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "First Name")

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.value", customer.last_name)

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.value", customer.postal_code)
        })

        it("empty last name field", () => {
            cy.fillShoppingForm(customer.first_name, "{backspace}", customer.postal_code)

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: Last Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.value", customer.first_name)

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Last Name")

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.value", customer.postal_code)
        })

        it("empty postal code field", () => {
            cy.fillShoppingForm(customer.first_name, customer.last_name, "{backspace}")

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: Postal Code is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.value", customer.first_name)

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.value", customer.last_name)

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Zip/Postal Code")
        })

        it("empty first name and last name fields", () => {
            cy.fillShoppingForm("{backspace}", "{backspace}", customer.postal_code)

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: First Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "First Name")

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Last Name")

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.value", customer.postal_code)
        })

        it("empty first name and postal code fields", () => {
            cy.fillShoppingForm("{backspace}", customer.last_name, "{backspace}")

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: First Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "First Name")

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.value", customer.last_name)

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Zip/Postal Code")
        })

        it("empty last name and postal code fields", () => {
            cy.fillShoppingForm(customer.first_name, "{backspace}", "{backspace}")

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: Last Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.value", customer.first_name)

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Last Name")

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Zip/Postal Code")
        })

        it("all fields empty", () => {
            cy.get('[data-test="continue"]').click()

            cy.get('[data-test="error"]')
                .should('have.text', 'Error: First Name is required')

            cy.get('[data-test="firstName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "First Name")

            cy.get('[data-test="lastName"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Last Name")

            cy.get('[data-test="postalCode"]')
                .should("have.class", "error")
                .should("have.attr", "placeholder", "Zip/Postal Code")
        })
    })
})