import React from 'react';
import {Button} from 'react-bootstrap';

function Login(props) {
    return <div>
        <h1>Login</h1>
        <Button onClick={props.change}>Login</Button>
    </div>
}

export default Login;