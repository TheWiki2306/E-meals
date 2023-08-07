import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.css';

const Vendor = () => {
  return (
    <div className='container vendor_container'>
        <h4>Sign up as vendor on Ofood</h4>
        <small>Make more customers and more sales!</small>
        
        <div className='signupLink'>
            <Link to="/vendor_signup" className='vendor_signup'>Sign up</Link>
        </div>
    </div>
  )
}

export default Vendor;
