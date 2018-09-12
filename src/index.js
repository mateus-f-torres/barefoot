//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/configureStore.js';

import App from './components/App.js';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  // $FlowFixMe, 'maybe-there' flow error
  document.getElementById('root')
);
