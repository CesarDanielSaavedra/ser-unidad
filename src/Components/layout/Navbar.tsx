import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDictionary } from '../../hooks/useDictionary';  

import ToggleButton from '../common/ToogleButton';


const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { components } = useDictionary(language);  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(
      language === components.ToogleButton.lenguageButton.initValue
        ? components.ToogleButton.lenguageButton.alterValue
        : components.ToogleButton.lenguageButton.initValue
    );
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">

        <Link to="/">
          <img src="/src/assets/logo_ser_unidad.svg" alt="Logo" className="h-8" />
        </Link>

        <button
          onClick={toggleMenu}
          className={`block lg:hidden p-2 bg-blue-500 text-white focus:outline-none transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        <ul
            className={`lg:flex lg:space-x-4 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'block' : 'hidden lg:block'
            }`}
          >
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

        <ToggleButton 
          initValue={components.ToogleButton.lenguageButton.initValue} 
          alterValue={components.ToogleButton.lenguageButton.alterValue}
          onClick={handleLanguageChange}
        />
        
      </div>
    </nav>
  );
};

export default Navbar;