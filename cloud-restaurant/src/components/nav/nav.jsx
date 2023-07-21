import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import {LiaSignInAltSolid} from 'react-icons/lia';

const Nav = () => {
  return (
    <nav className='container nav_container'>
      <div className='nav_inner_container'>
        <Link to="/" className='logo'><p><span className='o'>O</span>food.</p></Link>
      
          <div className='navItems'> 
            <Link to='/orders' className='link'> Orders </Link>
            <Link to='/station' className='link'> Station </Link>
            <Link to='/stocks' className='link'> Stock </Link>
          </div>

          <div>
            <Link to='signup' className='sign_up'><LiaSignInAltSolid/></Link>
          </div>
      </div>
        <article className='body'>
          <p>Welcome to <span>O</span>food.</p>
          <p>can we get your order?</p>
        </article>
        
    </nav>
  )
}

export default Nav
