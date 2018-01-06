import EventTypes from './EventTypes'


function applicationReducer(state, action) {

    switch (action.type) {
        case EventTypes.APPLICATION.LOCATION.UPDATE:
            return {...state, location: action.value};
        case EventTypes.APPLICATION.CODE_ACADEMY_ID.UPDATE:
            return {...state, codeAcademyId: action.value};
        case EventTypes.APPLICATION.WHY_BECOME_PROGRAMMER.UPDATE:
            return {...state, whyBecomeProgrammer: action.value};
        case EventTypes.APPLICATION.WHAT_DO_WITH_SKILLS.UPDATE:
            return {...state, whatDoWithSkills: action.value};
        case EventTypes.APPLICATION.WHAT_DO_5_YEARS.UPDATE:
            return {...state, whatDo5Years: action.value};
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
        case EventTypes.APPLICATION.LOCATION.UPDATE:
        case EventTypes.APPLICATION.WHAT_DO_5_YEARS.UPDATE:
        case EventTypes.APPLICATION.WHAT_DO_WITH_SKILLS.UPDATE:
        case EventTypes.APPLICATION.WHY_BECOME_PROGRAMMER.UPDATE:
        case EventTypes.APPLICATION.CODE_ACADEMY_ID.UPDATE:
            return {...state, application:applicationReducer(state.application, action)};
        case EventTypes.APPLICATION.SAVE.START:
            return {...state, applicationSaving:true};
        case EventTypes.APPLICATION.SAVE.COMPLETE:
            return {...state, applicationSaving:false};

        default:
            return state
    }
}