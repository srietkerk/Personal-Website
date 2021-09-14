import React from 'react';
import '../style/navbar.css'
import NavButton from './NavButton';

function Navbar() {
	return <nav className='nav-container'>
    <NavButton  name='Home' />
    <NavButton  name='About' />
    <NavButton  name='Resume' />
    <NavButton  name='Contact Me!' />
    <NavButton  name='Resources' />
  </nav>
}

export default Navbar;