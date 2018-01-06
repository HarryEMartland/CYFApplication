import React from 'react';
import {ControlLabel, Form, FormControl, FormGroup, InputGroup} from "react-bootstrap";

export default props => (
    <div>
        <h1>Hi, {props.name}</h1>

        <Form>

            <FormGroup>
                <ControlLabel>Why do you want to become a programmer? (100 words)</ControlLabel>
                <textarea onChange={props.updateWhyBecomeProgrammer}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props.whyBecomeProgrammer}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>What would you do with the new skills you will learn? (100
                    words)</ControlLabel>
                <textarea onChange={props.updateWhatDoWithSkills}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props.whatDoWithSkills}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>What do you see your self doing in 5 years time with these skills (100
                    words)</ControlLabel>
                <textarea onChange={props.updateWhatDo5Years}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props.whatDo5Years}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>Code Academy ID</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>https://www.codecademy.com/</InputGroup.Addon>
                    <FormControl type="text" defaultValue={props.codeAcademyId}
                                 onChange={props.updateCodeAcademyId}
                                 className="form-control" id="exampleInputAmount"
                                 placeholder="Code Academy ID"></FormControl>
                </InputGroup>
            </FormGroup>

        </Form>
    </div>
)