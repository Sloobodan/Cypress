var sauce_data = require('../../../fixtures/saucedemo.json')
var invalid_data = require('../../../fixtures/invalid_data.json')

describe("Test Login Form", () => {
    describe("Valid Login as", () => {
        it("standard user", () => {
            cy.login(sauce_data.standard_user, sauce_data.password)

            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

            cy.get('.title').should('have.text', "Products")
            
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').should('exist')
        })

        it("problem user", () => {
            cy.login(sauce_data.problem_user, sauce_data.password)

            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

            cy.get('.title').should('have.text', "Products")

            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').should('exist')
        })

        it("performance glitch user", () => {
            cy.login(sauce_data.performance_glitch_user, sauce_data.password)

            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

            cy.get('.title').should('have.text', "Products")

            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').should('exist')
        })
    })

    describe("Invalid Login", () => {
        it("as locked out user", () => {
            cy.login(sauce_data.locked_out_user, sauce_data.password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        })

        it("wrong username", () => {
            cy.login(invalid_data.wrong_username, sauce_data.password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it("wrong password for standard user", () => {
            cy.login(sauce_data.standard_user, invalid_data.wrong_password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it("wrong password for problem user", () => {
            cy.login(sauce_data.problem_user, invalid_data.wrong_password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it("wrong password for performance glitch user", () => {
            cy.login(sauce_data.performance_glitch_user, invalid_data.wrong_password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it("wrong username and password", () => {
            cy.login(invalid_data.wrong_username, invalid_data.wrong_password)

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })

        it("empty password field", () => {
            cy.login(sauce_data.standard_user, "{backspace}")              // 1. nacin - prazno polje 

            // cy.get('[data-test="password"]')                            // 2. nacin - prazno polje
            //     .invoke('val', '')

            // cy.get('[data-test="password"]')                            // 3. nacin - prazno polje 
            //         .clear()

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Password is required')
        })

        it("empty username field", () => {
            cy.login("{backspace}", sauce_data.password)            

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username is required')
        })

        it("empty username and password fields", () => {
            cy.login("{backspace}", "{backspace}")             

            cy.get('[data-test="error"]')
                .should('have.text', 'Epic sadface: Username is required')
        })
    })
})