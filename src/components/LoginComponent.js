import React from 'react';
import GoogleSignIn from "react-google-signin";

export default props => (
    <div className="text-center">
        {!props.loggedIn &&
        <GoogleSignIn clientId="415668022530-f9pmvgra9147b2chl8k936c3ahis808t"
                      ref={g => this.googleAuth = g}
                      onSuccess={props.login.bind(this)} needAccess="true"/>
        }
    </div>
)