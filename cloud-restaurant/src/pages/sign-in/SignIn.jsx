import React from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';

const SignIn = () => {
  return (
    <div className='signin_container'>
      <div className='signin_inner_container'>
        <div className='signin_text'>
          <p>WELCOME!</p>
        </div>
          <label className='signup_details'>
            <input type="text" placeholder="username or email" className='label'/>
            <input type="text" placeholder='password' className='label' />
          </label>
            <div className='recover_password'>
              <p>Forgot password? <Link to="/forgot-password" className='log_in'>Recover password</Link></p>
            </div>
              <div className='create_account'>
                <Link to="/signup" className='signup_link'>Create Account</Link>
              </div>
      </div>
    </div>
  )
}

export default SignIn;

