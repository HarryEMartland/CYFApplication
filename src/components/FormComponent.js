import React from 'react';
import {ControlLabel, Form, FormControl, FormGroup, InputGroup} from "react-bootstrap";
import {LOCATION, WHY_BECOME_PROGRAMMER, WHAT_DO_WITH_SKILLS,WHAT_DO_5_YEARS, CODE_ACADEMY_ID} from "../Application"

export default props => (
    <div>
        <h1>Hi, {props.name}</h1>

        <Form>

            <FormGroup>
                <ControlLabel>Nearest CYF Location</ControlLabel>
                <select value={props[LOCATION]} onChange={props.updateField(LOCATION)} className="form-control">
                    <option disabled selected value>Select a location</option>
                    <option value="GLASGOW">Glasgow</option>
                    <option value="LONDON">London</option>
                    <option value="MANCHESTER">Manchester</option>
                </select>
            </FormGroup>

            <FormGroup>
                <ControlLabel>Why do you want to become a programmer? (100 words)</ControlLabel>
                <textarea onChange={props.updateField(WHY_BECOME_PROGRAMMER)}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props[WHY_BECOME_PROGRAMMER]}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>What would you do with the new skills you will learn? (100
                    words)</ControlLabel>
                <textarea onChange={props.updateField(WHAT_DO_WITH_SKILLS)}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props[WHAT_DO_WITH_SKILLS]}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>What do you see your self doing in 5 years time with these skills (100
                    words)</ControlLabel>
                <textarea onChange={props.updateField(WHAT_DO_5_YEARS)}
                          className="form-control"
                          id="exampleInputAmount" defaultValue={props[WHAT_DO_5_YEARS]}></textarea>
            </FormGroup>

            <FormGroup>
                <ControlLabel>Code Academy ID</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon>https://www.codecademy.com/</InputGroup.Addon>
                    <FormControl type="text" defaultValue={props[CODE_ACADEMY_ID]}
                                 onChange={props.updateField(CODE_ACADEMY_ID)}
                                 className="form-control" id="exampleInputAmount"
                                 placeholder="Code Academy ID"></FormControl>
                </InputGroup>
            </FormGroup>

        </Form>
    </div>
)