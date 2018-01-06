import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import LoginContainer from "../containers/LoginContainer";
import FormContainer from "../containers/FormContainer";
import LoggedInContainer from "../containers/LoggedInContainer";
import LoggedOutContainer from "../containers/LoggedOutContainer";
import SaveContainer from "../containers/SaveContainer";
import thunkMiddleware from 'redux-thunk'
import routeReducer from '../reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(routeReducer, {
    loggedIn: false,
    application: {}
}, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className="row">
                    <LoggedOutContainer>
                        <LoginContainer/>
                    </LoggedOutContainer>
                    <LoggedInContainer>
                        <FormContainer/>
                        <SaveContainer/>
                    </LoggedInContainer>
                </div>
            </Provider>
        );
    }
}

export default App;