import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const [accepted, setAccepted] = useState(false)

    const handleRegistration = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleCheckBox = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mt-2'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="termsAndConditions">
                    <Form.Check onClick={handleCheckBox} type="checkbox" name='accept'
                        label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-secondary">
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;