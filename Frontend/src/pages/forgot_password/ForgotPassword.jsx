import React, { useState } from 'react';
import { forgotPasswordApi } from '../../apis/Api';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        forgotPasswordApi({ email }).then((res) => {
            toast.success('Password reset link sent to your email');
        }).catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
        });
    };

    return (
        <div className='container'>
            <h1>Forgot Password</h1>
            <label htmlFor='email'>Type your email</label>
            <input
                id='email'
                className='form-control w-50'
                type='email'
                placeholder='Enter valid email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn btn-primary mt-3' onClick={handleSubmit}>
                Send password reset link
            </button>
        </div>
    );
};

export default ForgotPassword;
