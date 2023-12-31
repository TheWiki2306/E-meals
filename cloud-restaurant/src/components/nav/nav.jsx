import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import {LiaSignInAltSolid} from 'react-icons/lia';
import { BsToggleOn } from 'react-icons/bs';
import './nav.css';


const Nav = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
   return (
    <nav className='container nav_container' data-theme={theme}>
      <div className='nav_inner_container'>
        <Link to="/" className='logo'>
          <p><span className='o'>O</span>food.</p>
        </Link>
      
          <div className='navItems'> 
           
            <Link to='/station' className='link'> Station </Link>
            <Link to='/stocks' className='link'> Stock </Link>
          </div>

          <div>
            <Link to='signup' className='sign_up'><LiaSignInAltSolid/></Link>
          </div>

          <div className="theme_toggle"> 
            <i onClick={switchTheme}><BsToggleOn /></i>
          </div>
      </div>
        
    </nav>
  )
}

export default Nav
