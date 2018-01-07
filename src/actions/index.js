import EventTypes from "../reducers/EventTypes";
import AWS from 'aws-sdk';


export function login(googleData, token) {
    return function (dispatch) {

        AWS.config.update({region: 'eu-west-1'});

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-1:bd8e0767-afe0-449d-93d2-c7d51478326b',
            Logins: {
                'accounts.google.com': token
            }
        });

        AWS.config.credentials.get(function (err) {
            if (err) console.error(err);
            // Access AWS resources here.

            var docClient = new AWS.DynamoDB.DocumentClient();
            let amazonLoginData = AWS.config.credentials;
            var params = {
                TableName: "CYFApplications",
                Key: {
                    "id": amazonLoginData.identityId
                }
            };
            docClient.get(params, function (err, document) {
                if (err) console.error(err);
                else {
                    dispatch({
                        type: EventTypes.LOGIN,
                        application: document.Item,
                        loginData: {...googleData, ...amazonLoginData}
                    });
                }
            });
        });
    }
}

export function updateApplicationField(field, value) {
    return {
        type: EventTypes.APPLICATION.FIELD.UPDATE,
        field,
        value
    };
}

export function save() {
    return function (dispatch, getState) {
        dispatch({type: EventTypes.APPLICATION.SAVE.START});
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: "CYFApplications",
            Item: getState().application
        };
        return docClient.put(params).promise()
            .then(function () {
                dispatch({type: EventTypes.APPLICATION.SAVE.COMPLETE});
            }).catch(function (error) {
                console.error(error)
            })
    }
}