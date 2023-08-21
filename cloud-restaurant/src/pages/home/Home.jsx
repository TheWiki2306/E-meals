import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VendorSignup from '../vendor_signup/Vendor_signup';
import Vendor from '../../components/vendors_signup/vendor';
import { GrLocation } from 'react-icons/gr';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import './home.css';

const Home = () => {
  return (
    <>
    <div className='home_container'>
        <div className='container body'>
          <p className='welcome'>Welcome to <span className='o'>O</span>food.</p>
          <p className='request'>can we get your order?</p>
          <div>
            <Link to='/orders' className='link'> Orders </Link>
          </div>
        </div>
          <div className='how'>
            <h4>How it Works</h4>
            <div className='how_container'>
              <article className='location'>
                <i><GrLocation /></i>
                <h5>Set delivery location</h5>
                <small>Set the location for your delivery to be made</small>
              </article>
              <article className='products'>
                <i><MdProductionQuantityLimits /></i>
                <h5>Choose the product</h5>
                <small>Set the location for your delivery to be made</small>
              </article>
              <article className='delivery'>
                <i><TbTruckDelivery /></i>
                <h5>Receive it at your doorstep</h5>
                <small>Set the location for your delivery to be made</small>
              </article>
            </div>
          </div>
          <Vendor />
        {/* </div> */}
    </div>
     <Routes>
     <Route path='/vendor_signup' element={<VendorSignup />}/>
   </Routes>
   <footer>
    <p>&copy; Copyright, Ofood 2023</p>
   </footer>
    </>

  )
}
export default Home;