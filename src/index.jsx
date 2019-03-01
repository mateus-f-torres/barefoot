//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from 'ducks/';
import AppContainer from 'containers/app';
import './i18n';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={createStore()}>
      <AppContainer />
    </Provider>,
    root,
  );
}

