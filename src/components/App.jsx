//@flow
import * as React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList.js';

import 'Styles/App.scss'; // last stylesheet called, main layout
// import logo from 'Images/logo.svg'; // import using webpack resolve.alias

const App = () => (
  <div id="app">
    <h1>ToDo App</h1>
    <VisibleTodoList />
  </div>
);

export default App;
