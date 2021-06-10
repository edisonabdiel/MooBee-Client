import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './register-view.scss';

const RegisterView = () => {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    axios.post('https://moobei.herokuapp.com/users', {
        username: username,
        password: password,
        email: email
    })
        .then(response => {
            const data = response.data;
            console.log(data);
            window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
        })
        .catch(e => {
            console.log('error registering the user')
        });


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Row className="justify-content-md-center">
            <h1>Register on MooBee</h1>
            <Form>
                <Form.Group controlId="userName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Button type="submit" variant="light" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Row>
    );
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};

export default RegisterView;