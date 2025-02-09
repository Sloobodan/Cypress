describe("Requests - posts", () => {
    it("Create new comment", () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
            .its('body.0')                      // uzimamo prvi element tj. prvog korisnika
            .as('korisnik')                     // cuvamo objekat u okviru testa
            .then(function () {                 // da bismo pristupili sacuvanom objektu koristimo "function () { ... }" callback
                cy.request('https://jsonplaceholder.cypress.io/posts?_limit=1')
                    .its('body.0')              // uzimamo prvi element tj. prvu objavu
                    .as('objava')
            })

            .then(function () {
                cy.request('POST', 'https://jsonplaceholder.cypress.io/comments', {
                    postId: this.objava.id,
                    name: 'Comment name',
                    email: this.korisnik.email,
                    body: 'Comment body'
                })
                    .its('body')
                    .as('komentar')             // cuvamo kreirani komentar 
            })

            .then(function () {
                // kada se pokrene callback .request komande su se izvrsile i mozemo da pristupimo komentaru-u
                expect(this.komentar, 'post has the right user id').property('postId').to.equal(this.objava.id)
                expect(this.komentar, 'post has the right user id').property('email').to.equal(this.korisnik.email)
            })
    })
})