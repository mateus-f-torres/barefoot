//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from 'Stores/configureStore';

import App from 'Views/App.jsx';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    root,
  );
}

