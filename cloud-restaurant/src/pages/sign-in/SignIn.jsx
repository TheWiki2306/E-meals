import React from 'react';
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
    </div>
  )
}

export default SignIn;

