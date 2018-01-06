import {connect} from 'react-redux'
import ConditionalRenderComponent from '../components/ConditionalRenderComponent'


const mapStateToProps = (state) => ({
    shouldRender: state.loggedIn
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConditionalRenderComponent);