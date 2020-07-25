describe('Barefoot', function () {
  it('successfully loads', function () {
    cy.visit('/')

    cy.findByText('Hello World').should('exist')
  })
})
