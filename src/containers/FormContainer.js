import {connect} from 'react-redux'
import FormComponent from "../components/FormComponent";
import {updateApplicationField} from "../actions/index"

const mapStateToProps = (state) => ({
    ...state.application
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (field) => {
        return function (event) {
            dispatch(updateApplicationField(field, event.target.value))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)