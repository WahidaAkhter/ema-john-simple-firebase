import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import auth from '../../firebase.init'

const Signup = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPass, setConfirmPass] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlpassBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPass) {

            setError('your password didnot match ,try again');
            return;
        }
        if (password.length < 6) {
            setError('your password should greater than 6 ,try again')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    };



    return (
        <div className='form-container'>
            <div>
                <h2 className='form-tittle'> SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />

                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlpassBlur} type="password" name="password" required />

                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" required />

                    </div>
                    <p>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" required />
                </form>
                <p>Already have a account?
                    <Link className='form-link' to='/login'>Login now</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;