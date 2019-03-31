//@flow
import {connect} from 'react-redux';

import {fetchRandomActivity} from 'ducks/todos';
import App from 'components/app';

import type {State} from 'types/state';

/* eslint no-unused-vars: 'off' */
function mapStateToProps(state: State) {
  return {};
}

function mapDispatchToActions(dispatch: *) {
  return {
    fetchRandomActivity() {
      dispatch(fetchRandomActivity());
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToActions,
)(App);

export default AppContainer;
