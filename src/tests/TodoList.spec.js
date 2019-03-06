import React from 'react';
import {wait} from 'react-testing-library';

import todos from 'ducks/todos';
import TodoListContainer from 'containers/todolist';
import {mockFetch, setupRenderWithReduxAndSaga} from './helpers';
import './i18n';

afterEach(() => { global.fetch = undefined; })

describe('TodoList', () => {
  describe('____', () => {
    it('____', async () => {
      global.fetch = mockFetch(undefined);
      // const {saga, render} = setupRenderWithReduxAndSaga({features});
      //saga.run(watchCallFetchFeature);
      const {render} = setupRenderWithReduxAndSaga({todos});
      const {getByText} = render(<TodoListContainer />);

      await wait(() => {
        expect(getByText(/hello/)).toBe(null);
      });
    })
  })
})
