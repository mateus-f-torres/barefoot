# React_Redux Workflow

> First step would be to create all the UI components with some fake data,  
then, after all is well, connect with the redux store

### Components

* Write components normally, but all of them that might use state now use props

> Stateless Components created via class need **this.**
> Stateless Functional Components do not, via implicit this with **=>**

* Remeber the name of props that come from state

```javascript
<h2>Welcome {this.props.username}</h2>  // username will come from the store
```

* Where you would normally call `this.setState({})`, create a prop method

```javascript
handleClick(e) {
  e.preventDefault();
  const type = e.target.name;
  switch(type) {
    case "+":
      this.props.scorePlus(); // could pass some argument as well
      break;
    case "-":
      this.props.scoreMinus(); // maybe to inform the store about something
  }
}
```

### Containers

* Map the parts of your component that interact with the store

* Props that come from state are mapped first

```javascript
const mapStatetoProps = (state) => {
  // after receiving new state copy it to the component props
  return {
    // this.props.username
    username: state.user.name  // key .user from state comes from the rootReducer, we get to chose that name
  };
};
```

* Methods that call for a state change are mapped second,  
create a name for the actions dispatched by those methods

```javascript
import { incrementScore, decrementScore } from '../actions';
// up top

const mapDispatchToProps = (dispatch) => {
  // those props now can dispatch actions to the state store
  return {
    scorePlus: () => {
      dispatch(incrementScore())
    },
    scoreMinus: () => {
      dispatch(decrementScore())
    }
  };
};
```

* Create a connection between your 'dumb' component and the 'smart' container

```javascript
import { connect } from 'react-redux';
import { Presentational } from '../components/Presentational.jsx';
// up top

const SmartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

export default SmartContainer;
```

### Actions

* Create factory functions for those methods that dispatch actions to the store

```javascript
export const incrementScore = () => ({
  type: 'INCREMENT_SCORE' // type is use by the reducer to identify which action was dispatched
})

export const decrementScore = () => ({
  type 'DECREMENT_SCORE'
})

// say you wanted some extra information passed to the reducer, that would be the action.payload

export const lowerCaseName = (name) => ({
  type: 'LOWERCASE',
  name  // together with action.type, there would be an action.name key, with that argument
})
```

### Reducers

* The real brain of react-redux, here is where you make all the changes that would be done with `this.setState({})`

* Everything must return a COPY of the modified state or the original ONLY when not modified

> If state is an Array or an Object, think like the examples below, returning an unnamed copy

```javascript
const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCREMENT_SCORE':

      /* state logic here  */

      // using array spread to return a modified copy
      return [...state, newItem];

    case 'DECREMENT_SCORE':

      /* more logic here */
      
      // using Object.assign with first arg empty object to return a modified copy
      return Object.assign({}, state, copy);

    default:
      return state
  }
}

export default userReducer;
```

* You could provide mutiple reducers, each handling one part of the app

```javascript
import { combineReducers } from 'redux';

import user from './user.js';

export default combineReducers({
  user
});
```

### Provider

* Provider will subscribe each 'smart' container to the store, allowing for the react-redux magic

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/reducers/index.js';

import App from './app/components/App.jsx';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
