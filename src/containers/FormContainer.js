import {connect} from 'react-redux'
import FormComponent from "../components/FormComponent";
import EventTypes from "../reducers/EventTypes";

const mapStateToProps = (state) => ({
    ...state.application
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCodeAcademyId: (event) => {
        dispatch({type: EventTypes.APPLICATION.CODE_ACADEMY_ID.UPDATE, value: event.target.value})
    },
    updateWhyBecomeProgrammer: (event) => {
        dispatch({type: EventTypes.APPLICATION.WHY_BECOME_PROGRAMMER.UPDATE, value: event.target.value})
    },
    updateWhatDoWithSkills: (event) => {
        dispatch({type: EventTypes.APPLICATION.WHAT_DO_WITH_SKILLS.UPDATE, value: event.target.value})
    },
    updateWhatDo5Years: (event) => {
        dispatch({type: EventTypes.APPLICATION.WHAT_DO_5_YEARS.UPDATE, value: event.target.value})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)