import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlpassBlur = event => {
        setPassword(event.target.value);
    }



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }


    const handleUserSignIn = event => {
        event.preventdefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-tittle'> Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />

                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlpassBlur} type="password" name="password" required />

                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>loading..............</p>

                    }
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <div className="or">
                    <div className='divider'></div>
                    <p>or</p>
                    <div className='divider'></div>
                </div>
                <p>new to ema-john?
                    <Link className='form-link' to='/signup'>create a new account</Link>
                </p>
            </div>
        </div>

    );
};

export default Login;