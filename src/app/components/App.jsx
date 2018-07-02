import React from 'react';

import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.js';
import VisibleTodoList from '../containers/VisibleTodoList.js';

import 'Styles/App.scss';                // last stylesheet called, main layout
//import logo from 'Images/logo.svg'; // import using webpack resolve.alias

const App = () => (
  <div id="app">
    <h1>Convoluted To-Do App</h1>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App;