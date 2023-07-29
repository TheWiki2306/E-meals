import React from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';

const  SignUp = () => {
  return (
    <div className='signup_container'>
      <div className='signup_text'>
        <p>Create an account with <span className='o'>O</span>food</p>
      </div>
        <div>
          <label className='signup_details'>
            <input type="text" placeholder="Name" className='label'/>
            <input type="text" placeholder='Date of Birth' className='label' />
            <input type="email" placeholder="Email" className='label'/>
            <input type="text" placeholder='Preferred Username' className='label'/>
            <input type="text" placeholder="Password" className='label'/> 
          </label>
          <button type='submit' className='submit'>Submit</button>

        </div> 
          <div className='account'>
            <p>Already have an account? <Link to="/signin" className='log'>Log in</Link></p>
          </div>
      
    </div>
  )
}

export default SignUp;
