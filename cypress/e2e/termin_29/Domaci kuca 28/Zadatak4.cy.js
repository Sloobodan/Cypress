describe('Login Form tests', () => {
    it('Login how standard_user Test', () => {

        cy.loginForm('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')

        cy.get('.app_logo')
        .should('have.text', 'Swag Labs')
    });

    it('Login how locked_out_user Test', () => {

        cy.loginForm('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]')
          .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Login how problem_user Test', () => {

        cy.loginForm('problem_user', 'secret_sauce')
        //  Sad ne znam jel ovde treba da ocekujemo da se uloguje ili ne, posto pise da je problem_user
        // Pa shodno tome da radim provere
    });

    it('Login how performance_glitch_user Test', () => {

        cy.loginForm('performance_glitch_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')

        cy.get('.app_logo')
        .should('have.text', 'Swag Labs')
    });

                            //TODO: sad treba hvatati gresku gde se zahteva da se unese nesto u polje!!

        describe('Login form for failure test', () => {

            it('Log in with failed credentials as standard_user Test', () =>{
                cy.loginForm('standard_user', ' ')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

                cy.loginForm('standard_user', '0')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

                cy.loginForm(' ', 'secret_sauce')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        
    
            })

            it('Log in with failed credentials as problem_user Test', () =>{
                cy.loginForm('problem_user', ' ')
                cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

                cy.loginForm('problem_user', ' ')
                cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

                cy.loginForm(' ', 'secret_sauce')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
            
            })


            it('Log in with failed credentials as performance_glitch_user Test', () =>{
                cy.loginForm('performance_glitch_user', ' ')
                cy.get('[data-test="error"]')
                     .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        
                cy.loginForm('performance_glitch_user', '0')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        
                cy.loginForm(' ', 'secret_sauce')
                cy.get('[data-test="error"]')
                    .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
                
                            
        

            })


        })
});