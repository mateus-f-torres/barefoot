import '@rckeller/cypress-unfetch'
import '@rckeller/cypress-unfetch/await'

describe('Barefoot', function() {
  it('requests an external API response on click', function() {
    cy.route('GET', 'https://yesno.wtf/api', 'fx:answer').as('getAnswer')

    cy.visit('/')
    cy.queryByTestId('random_answer').click()

    cy.await()
  })
})
