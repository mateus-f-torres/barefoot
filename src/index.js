//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './stores/configureStore.js';

import App from './views/App.js';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  // $FlowFixMe, 'maybe-there' flow error
  document.getElementById('root')
);
