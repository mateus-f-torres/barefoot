describe('Barefoot', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.queryByText('Do you want to be my friend ?')
  })
})
