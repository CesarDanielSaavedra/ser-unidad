//import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de Sergio</Link></li>
        <li><Link to="/yoga-classes">Yoga</Link></li>
        <li><Link to="/meditation">Meditación</Link></li>
        <li><Link to="/custom-classes">Personalizadas</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/philosophy">Filosofía</Link></li>
        <li><Link to="/practice-space">Práctica</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;