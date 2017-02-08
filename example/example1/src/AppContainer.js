import { connect } from 'react-redux'
import {requestBegin, responseOK, responseException} from './actions'
import App from './App'

const mapStateToProps = (state, ownProps) => {
  console.info("mapStateToProps => pre-state: ", state)
  return {
      showLoading111 : state.req.showLoading,
      text22 : state.req.text,
      url333 : state.req.url
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRequest: (url,text) => {
    console.info("dispatch onRequest => ownProps: ", ownProps);

    dispatch(requestBegin(url,text))
  },
  onResponseOK : (txt) => {
      dispatch(responseOK(txt))
  },
  onResponseExcept : (except) => {
      dispatch(responseException(except))
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
