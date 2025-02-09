describe('Page load event', () => {
    it('timeout specified', () => {
        cy.visit('https://www.computerhope.com/jargon/c/checkbox.htm', {
            // wait 30 sec for page 'load' event
            timeout: 30000,
        })
    })
})