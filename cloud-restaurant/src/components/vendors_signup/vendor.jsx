import React from 'react';
import { Link } from 'react-router-dom';

const Vendor = () => {
  return (
    <div className='vendor_container'>
        <h5>Sign up as vendor on Ofood</h5>
        <p>Make more customers and more sales!</p>
        <Link to="/vendor_signup">Sign up</Link>
    </div>
  )
}

export default Vendor;
