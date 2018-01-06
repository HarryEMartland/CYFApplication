import {connect} from 'react-redux'
import LoginComponent from '../components/LoginComponent'

import {login} from '../actions/index'

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: function (googleData, token) {
        dispatch(login(googleData, token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)