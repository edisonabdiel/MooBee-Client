import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './login-view.scss';

import beeLogo from '../../assets/bee.png';

const LoginView = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://moobei.herokuapp.com/login', {
            username: username,
            password: password
        })
            .then(res => {
                const data = res.data;
                props.onLoggedIn(data);
                console.log(data)
            })
            .catch(e => {
                console.log('no such user')
            })
    }

    return (
        <Row className="justify-content-md-center">
            <Form className="form">
                <h1>Login to MooBee</h1>
                <Form.Group controlId="username" >
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="@username" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button type="submit" variant="info" onClick={handleSubmit}>Login</Button>
            </Form>
        </Row>
    );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
    onRegister: PropTypes.func,
};


export default LoginView;