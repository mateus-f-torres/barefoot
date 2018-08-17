//@flow
import * as React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList.js';

import 'Styles/App.scss'; // last stylesheet called

const App = () => (
  <div id="app">
    <h1>ToDo App</h1>
    <VisibleTodoList />
  </div>
);

export default App;
