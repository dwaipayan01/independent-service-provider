import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-3 px-3">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-danger w-100"><FcGoogle></FcGoogle> Sign In With Google</button>
            <button onClick={handleGithubSignIn} className="btn btn-danger w-100 mt-3 mb-5"><BsGithub></BsGithub> Sign In With Github</button>
        </div>
    );
};

export default SocialLogin;