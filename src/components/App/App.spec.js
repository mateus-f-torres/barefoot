import React from 'react'
// TODO: see if wait use is needed
// import {wait, fireEvent} from '@testing-library/react'
import {wait} from '@testing-library/react'

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

      await wait(() => {
        expect(queryByText(/friend_request/)).toBeInTheDocument()
      })
    })
  })
})
