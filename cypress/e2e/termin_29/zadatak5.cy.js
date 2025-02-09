describe("Requests - posts", () => {
    it("Get all posts", () => {
        cy.request('https://jsonplaceholder.cypress.io/posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })
})