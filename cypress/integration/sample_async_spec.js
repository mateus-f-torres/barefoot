import '@rckeller/cypress-unfetch'
import '@rckeller/cypress-unfetch/await'

describe('Barefoot', function () {
  it('requests an external API response on click', function () {
    cy.route('GET', 'https://yesno.wtf/api', 'fx:answer').as('getAnswer')

    cy.visit('/')
    cy.findByTestId('random_answer').click()

    cy.findByLabelText('Yes').should('be.checked')

    cy.await()
  })
})
