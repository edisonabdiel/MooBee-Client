import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginView = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onLoggedIn(username);
    }

    return (
        <Form>
            <Form.Group controlId="userName" >
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
            </Form.Group>
            <Button type="submit" variant="info" onClick={handleSubmit}>Login</Button>
        </Form>
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