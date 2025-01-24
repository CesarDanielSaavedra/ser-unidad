import { useEffect, useState } from 'react';

import { useLanguage } from '../../hooks/useLanguage';
import { useDictionary } from '../../hooks/useDictionary';

import LinksList from './LinksList';

import { createLinkList } from '../../utils';

import { ROUTES } from '../../config/routes';

interface ToggleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ToggleModal = ({ isOpen, onClose }: ToggleModalProps ) => {
    
    const [isHovered, setIsHovered] = useState(false); 
    const { language } = useLanguage();
    const { dictionary } = useDictionary(language);  

    useEffect(() => {
      if (!isHovered && isOpen) {
        const timer = setTimeout(() => {
          onClose(); 
        }, 3000);
  
        return () => clearTimeout(timer); 
      }
    }, [isHovered, onClose]);

    if (!isOpen) return null; // not rendering if Modal is close.

    const linksItems = createLinkList(dictionary.links, ROUTES);
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

          <div
            className="absolute inset-0"
            onClick={onClose}
          ></div>

          <div
            className="relative bg-blue-500 p-6 rounded-lg shadow-lg max-w-sm w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => e.stopPropagation()}  // Prevents the click inside the modal from closing
          >
            <LinksList items={linksItems} className='space-y-2' />
          </div>
        </div>
    );
};
    

export default ToggleModal;