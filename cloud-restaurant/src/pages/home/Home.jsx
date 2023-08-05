import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import './home.css';

const Home = () => {
  return (
    <div className='container home_container'>
        <div className='body'>
          <p className='welcome'>Welcome to <span className='o'>O</span>food.</p>
          <p className='request'>can we get your order?</p>

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
        </div>
    </div>
  )
}

export default Home;
