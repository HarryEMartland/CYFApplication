import React from 'react';

export default props => (
    <div>
        {props.shouldRender &&
        props.children
        }
    </div>
)