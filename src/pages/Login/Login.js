import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate("/home");
    }

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-25 mx-auto mt-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p className="text-danger">{error?.message}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-3'>New to this website ? <Link className='text-decoration-none' to="/signup">Sign up</Link></p>
                <p>Forget password ? <Link onClick={handlePasswordReset} className="text-decoration-none" to="/login">Reset password</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;