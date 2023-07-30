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
          <div className='toggle_theme'>
            <i class='fas fa-toggle-on'></i>
          </div>
          <div>
            <Link to='signup' className='sign_up'><LiaSignInAltSolid/></Link>
          </div>
      </div>
        
    </nav>
  )
}

export default Nav
