import {connect} from 'react-redux'
import {ProgressBar} from "react-bootstrap";
import {
    LOCATION, WHAT_DO_5_YEARS, WHAT_DO_WITH_SKILLS,
    WHY_BECOME_PROGRAMMER
} from "../Application";

const fieldPercentage = {
    [LOCATION]: 2,
    [WHY_BECOME_PROGRAMMER]: 2,
    [WHAT_DO_WITH_SKILLS]: 2,
    [WHY_BECOME_PROGRAMMER]: 2,
    [WHAT_DO_5_YEARS]: 2
};

const mapStateToProps = function (state) {

    const application = state.application;

    let percentage = 0;
    for (const field in application) {
        const value = application[field];
        if (value && value !== '' && fieldPercentage[field]) {
            console.log(field, application[field], fieldPercentage[field], percentage)

            percentage = percentage + fieldPercentage[field];
        }
    }

    return {now: percentage, label: `${percentage}% Complete`, bsStyle: "success"}
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)