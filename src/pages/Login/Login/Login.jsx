import React, { useContext, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                console.log('User created Successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <Container className='w-25 mt-2'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-secondary">
                        Don't have an account? <Link to='/registration'>Register</Link>
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

export default Login;