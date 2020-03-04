import {connect} from 'react-redux'

import {
  answerYes,
  answerNo,
  getRandomAnswer,
} from '../../stores/question/question'
import App from './App'

function mapStateToProps(state) {
  return {
    yes: state.question.yes,
    no: state.question.no,
  }
}

function mapDispatchToActions(dispatch) {
  return {
    answerYes() {
      dispatch(answerYes())
    },
    answerNo() {
      dispatch(answerNo())
    },
    getRandomAnswer() {
      dispatch(getRandomAnswer())
    },
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToActions)(App)

export default AppContainer
