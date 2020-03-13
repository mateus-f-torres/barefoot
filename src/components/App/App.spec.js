import React from 'react'
import {waitFor} from '@testing-library/react'

import question from '../../stores/question/question'
import AppContainer from './AppContainer'
import setupRenderWithReduxAndSaga from '../../../__tests__/helpers'
import '../../../__tests__/i18n'

// TODO: write tests
describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('____', () => {
    it('____', async () => {
      // const {saga, render} = setupRenderWithReduxAndSaga({features});
      // saga.run(watchCallFetchFeature);
      const {render} = setupRenderWithReduxAndSaga({question: question})
      const {queryByText} = render(<AppContainer />)

      await waitFor(() => {
        expect(queryByText(/friend_request/)).toBeInTheDocument()
      })
    })
  })
})
