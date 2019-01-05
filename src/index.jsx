//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from 'Stores/configureStore';

import App from 'Views/App.jsx';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
