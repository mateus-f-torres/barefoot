describe('Barefoot', function () {
  it('successfully loads', function () {
    cy.visit('/')

    cy.findByText('Do you want to be my friend ?').should('exist')
  })
})
