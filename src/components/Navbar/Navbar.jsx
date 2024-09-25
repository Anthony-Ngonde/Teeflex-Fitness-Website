import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={logo} alt="" />
     <ul className="nav-menu">
        <li>Home</li>
        <li>Program</li>
        <li>Membership Rates</li>
        <li>About</li>
        <li>Contact Us</li>
     </ul>
     <div className="nav-connect">Join Now</div>
    </div>
  )
}

export default Navbar