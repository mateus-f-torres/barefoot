describe('Barefoot', function () {
  it('successfully loads', function () {
    cy.visit('/')

    cy.findByText('Lets play some games!').should('exist')
  })
})
