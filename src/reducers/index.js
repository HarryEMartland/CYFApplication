import EventTypes from './EventTypes'


function applicationReducer(state, action) {

    switch (action.type) {
        case EventTypes.APPLICATION.FIELD.UPDATE:
            return {...state, [action.field]:action.value};
        default:
            return state;
    }

}

export default (state, action) => {
    switch (action.type) {
        case EventTypes.LOGIN:
            const loginData = action.loginData;
            return {
                ...state,
                loginData: action.loginData,
                loggedIn: true,
                application: {...action.application, name: loginData.name, email:loginData.email, id:loginData._identityId}
            };
        case EventTypes.APPLICATION.FIELD.UPDATE:
            return {...state, application:applicationReducer(state.application, action)};
        case EventTypes.APPLICATION.SAVE.START:
            return {...state, applicationSaving:true};
        case EventTypes.APPLICATION.SAVE.COMPLETE:
            return {...state, applicationSaving:false};

        default:
            return state
    }
}