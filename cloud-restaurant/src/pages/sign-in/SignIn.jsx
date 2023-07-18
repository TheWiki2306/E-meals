import React from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';

const SignIn = () => {
  return (
    <div className='signin_container'>
      <div className='signin_text'>
        <p>WELCOME!</p>
      </div>
       <label className='signup_details'>
          <input type="text" placeholder="username or email" className='label'/>
          <input type="text" placeholder='password' className='label' />
        </label>
        <div className='recover_password'>
          <Link to="/forgot-password" className='log_in'>forgot password?</Link>
        </div>
    </div>
  )
}

export default SignIn;

