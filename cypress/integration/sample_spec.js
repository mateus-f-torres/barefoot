describe('Barefoot', function() {
  it('successfully loads', function() {
    cy.visit('/')

    cy.queryByPlaceholderText('Add todo')
  })
})
