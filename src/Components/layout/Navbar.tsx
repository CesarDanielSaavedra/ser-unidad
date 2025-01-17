import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDictionary } from '../../hooks/useDictionary';  

import ToggleButton from '../common/ToogleButton';
import ToggleModal from '../common/ToogleModal';

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

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-500 p-4 text-white ">
      <div className='flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/">
          <img src="/logo_ser_unidad.svg" alt="Logo" className="h-8" />
        </Link>

        {/* BURGER MENU */}
        <div
          // className={`flex items-center ${isMenuOpen ? 'justify-start' : 'justify-center'} lg: hidden`}
          className={`flex items-center justify-center ${isMenuOpen ? 'rotate-180' : ' '} transition duration-300 ease-in-out lg:hidden`}
        >
          <button
            onClick={handleToggleMenu}
            className="p-2 bg-blue-500 text-white focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>


        {/* LINKS MENU */}
        <ul
            className={'hidden lg:flex lg:space-x-4 items-center justify-center'}
            >
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
      <ToggleModal isOpen={isMenuOpen} onClose={handleToggleMenu}/>
    </nav>
  );
};

export default Navbar;