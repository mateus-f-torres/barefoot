import React from 'react'
// TODO: see if wait use is needed
// import {wait, fireEvent} from '@testing-library/react'
import {wait} from '@testing-library/react'

import todos from '../../ducks/todos'
import TodoListContainer from './TodoListContainer'
import setupRenderWithReduxAndSaga from '../../../__tests__/helpers'
import '../../../__tests__/i18n'

// TODO: write tests
describe('TodoList', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('____', () => {
    it('____', async () => {
      // const {saga, render} = setupRenderWithReduxAndSaga({features});
      // saga.run(watchCallFetchFeature);
      const {render} = setupRenderWithReduxAndSaga({todos})
      const {queryByText} = render(<TodoListContainer />)

      await wait(() => {
        expect(queryByText(/hello/)).toBe(null)
      })
    })
  })
})
