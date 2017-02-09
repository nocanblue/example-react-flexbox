import {connect} from 'react-redux'
import {requestBegin, responseOK, responseException} from './actions'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    console.info("mapStateToProps => preState:", state)
    return {
        _showLoading: state.req.showLoading,
        _text: state.req.text,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRequest:(text) => {
        console.info("dispatch onRequest => text: ", text);
        dispatch(requestBegin(text))
    },
    onResponseOK: (txt) => {
        console.info("dispatch onResponseOK => ", );
        dispatch(responseOK(txt))
    },
    onResponseExcept: (except) => {
        dispatch(responseException(except))
    }
})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer