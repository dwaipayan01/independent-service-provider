import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate("/home");
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password does not match");
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="w-25 mx-auto mt-5">
            <h1>Please Sign up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter Your name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Enter your Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Enter your password again" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? "text-primary" : " text-danger "} label="Do you agree with terms and condition" />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button disabled={!agree} className="mx-auto d-block w-100" variant="primary" type="submit">
                    Sign up
                </Button>
                <p className="mt-3">Already have an account ? <Link className="text-decoration-none" to="/login">Login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;