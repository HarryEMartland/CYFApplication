import React from 'react';
import {Button} from "react-bootstrap";

export default props => (
    <Button onClick={props.save.bind(this)} bsStyle="success" disabled={props.saving}>Save</Button>
)