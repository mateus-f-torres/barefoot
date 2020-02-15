import {connect} from 'react-redux'

import {fetchRandomActivity} from '../../ducks/todos'
import App from './App'

/* eslint no-unused-vars: 'off' */
function mapStateToProps(state) {
  return {}
}

function mapDispatchToActions(dispatch) {
  return {
    fetchRandomActivity() {
      dispatch(fetchRandomActivity())
    },
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToActions)(App)

export default AppContainer
