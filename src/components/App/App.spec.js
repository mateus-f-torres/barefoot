import React from 'react'
import {waitFor} from '@testing-library/react'

import question, {
  watchRequestRandomAnswer,
} from '../../stores/question/question'
import AppContainer from './AppContainer'

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('Sync Spec Example', () => {
    it('should correctly mock i18n translation', async () => {
      const {render} = setupRenderWithReduxAndSaga({question})

      const ui = <AppContainer />

      const {queryByText} = render(ui)

      await waitFor(() => {
        expect(queryByText(/friend_request/)).toBeInTheDocument()
      })
    })
  })

  describe('Async Spec Sample', function() {
    it('should correctly mock fetch calls', async function() {
      fetch.mockResponse(JSON.stringify({answer: 'no'}), {
        status: 200,
        headers: {'content-type': 'application/json'},
      })

      const {saga, render} = setupRenderWithReduxAndSaga({question})

      saga.run(watchRequestRandomAnswer)

      const ui = <AppContainer />

      const {getByText, getByTestId} = render(ui)

      await waitFor(() => {
        getByText(/random_answer/).click()
        expect(getByTestId(/answer-no/)).toBeChecked()
      })
    })
  })
})
