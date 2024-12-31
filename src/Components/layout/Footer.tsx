//import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Clases de Yoga y Meditación. Todos los derechos reservados.</p>
      <ul className="flex justify-center space-x-4">
        <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
