import {connect} from 'react-redux'
import SaveComponent from "../components/SaveComponent";
import {save} from "../actions/index"


const mapStateToProps = (state) => ({
    application:state.application,
    saving:state.applicationSaving
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    save: function () {
        dispatch(save())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveComponent)