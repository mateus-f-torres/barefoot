//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/configureStore.js';

import App from './components/App.jsx';

// 1st stylesheet called, resets here
import './index.scss';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
);
