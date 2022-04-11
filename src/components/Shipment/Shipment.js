import React, { useState } from 'react';

const Shipment = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPass, setConfirmPass] = useState('');

    const [error, setError] = useState('');

    // const navigate = useNavigate();

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

export default Shipment;