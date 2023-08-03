import React from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { GiOpenedFoodCan } from 'react-icons/gi';
import { PiBowlFoodLight } from 'react-icons/pi';
import { MdFastfood } from 'react-icons/md';
import './orders.css';

const Orders = () => {
  return (
    <div>

      <p>Restaurants</p>
      <div lastname='restaurants_container'>
        <article classname='restaurants'>
          <p>{BiFoodMenu}</p>
          <h4>French fry restaurant</h4>
          <small>Ikeja, Lagos State.</small>
        </article>
        <article classname='restaurants'>
          <p>{GiOpenedFoodCan}</p>
          <h4>M&P restaurant</h4>
          <small>Ikeja, Lagos State.</small>
        </article>
        <article classname='restaurants'>
          <p>{PiBowlFoodLight}</p>
          <h4>Mark Pasta</h4>
          <small>Ikeja, Lagos State.</small>
        </article>
        <article classname='restaurants'>
          <p>{MdFastfood}</p>
          <h4>Daily paper restaurant</h4>
          <small>Ikeja, Lagos State.</small>
        </article>
      </div>
    </div>
  )
}

export default Orders
