import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <li><NavLink to='/Login'>Iniciar sesión</NavLink></li>
        <li><NavLink to='/Registrarse'>Registrarse</NavLink></li>
      </ul>
    </div>
  );
};



