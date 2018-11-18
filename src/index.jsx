//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

import App from './views/App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  // $FlowFixMe, 'maybe-there' flow error
  document.getElementById('root'),
);
