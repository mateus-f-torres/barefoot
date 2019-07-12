import React from 'react'
// TODO: see if wait use is needed
// import {wait, fireEvent} from '@testing-library/react'
import {wait} from '@testing-library/react'

import todos from 'ducks/todos'
import TodoListContainer from 'components/TodoList/TodoListContainer'
import {mockFetch, setupRenderWithReduxAndSaga} from './helpers'
import './i18n'

afterEach(() => { global.fetch = undefined })

describe('TodoList', () => {
  describe('____', () => {
    it('____', async() => {
      global.fetch = mockFetch(undefined)
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
