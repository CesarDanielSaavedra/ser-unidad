import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { useDictionary } from '../../../hooks/useDictionary';  

import LinksList from '../../common/LinksList';
import ToggleButton from '../../common/ToogleButton';
import ToggleModal from '../../common/ToogleModal';

import { createLinkList  } from '../../../utils';

import { BASE_URL } from '../../../config/constants';
import { ROUTES } from '../../../config/routes';

import menuBtn from './menu.png';

const Navbar = () => {

  const { language, setLanguage } = useLanguage();
  const { dictionary, icons } = useDictionary(language);  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(
      language === dictionary.languages.initValue
        ? dictionary.languages.alterValue
        : dictionary.languages.initValue
    );
  };

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linksItems = createLinkList(dictionary.links, ROUTES);

  return (
    <nav className="bg-blue-500 p-4 text-white ">
      <div className='flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/">
          <img src={`${BASE_URL}${icons.main}`} alt="Logo" className="h-8" />
        </Link>

        {/* BURGER MENU */}
        <div className={`flex items-center justify-start w-full ml-2 lg:hidden`} >
          <button
            onClick={handleToggleMenu}
            className="p-2 bg-blue-500 text-white focus:outline-none"
          >
            <div className={`p-1 border-2 border-white rounded-md ${isMenuOpen ? 'rotate-180' : ' '} transition duration-[1.5s] ease-in-out`}>
              <img src={menuBtn} alt="Logo" className="h-5" />
            </div>
          </button>
        </div>

        {/* LINKS MENU */}
        <LinksList items={linksItems} className='hidden lg:flex lg:space-x-4 items-center justify-center' /> 

        <ToggleButton 
          className="p-2 text-blue-500 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
          initValue={`${BASE_URL}${icons.language.inital}`} 
          initClassName="w-8 h-8" 
          alterValue={`${BASE_URL}${icons.language.alter}`}
          alterClassName="w-8 h-8"
          onClick={handleLanguageChange}
        />
      
      </div>
      <ToggleModal isOpen={isMenuOpen} onClose={handleToggleMenu}/>
    </nav>
  );
};

export default Navbar;