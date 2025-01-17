import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

interface ToggleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ToggleModal = ({ isOpen, onClose }: ToggleModalProps ) => {
    
    const [isHovered, setIsHovered] = useState(false); 

    useEffect(() => {
      if (!isHovered && isOpen) {
        const timer = setTimeout(() => {
          onClose(); 
        }, 3000);
  
        return () => clearTimeout(timer); 
      }
    }, [isHovered, onClose]);

    if (!isOpen) return null; // not rendering if Modal is close.
  
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
            <ul className="space-y-4">
              <li><Link to="/" onClick={onClose}>Inicio</Link></li>
              <li><Link to="/about" onClick={onClose}>Acerca de Sergio</Link></li>
              <li><Link to="/yoga-classes" onClick={onClose}>Yoga</Link></li>
              <li><Link to="/meditation" onClick={onClose}>Meditación</Link></li>
              <li><Link to="/custom-classes" onClick={onClose}>Personalizadas</Link></li>
              <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
              <li><Link to="/contact" onClick={onClose}>Contacto</Link></li>
              <li><Link to="/philosophy" onClick={onClose}>Filosofía</Link></li>
              <li><Link to="/practice-space" onClick={onClose}>Práctica</Link></li>
            </ul>
          </div>
        </div>
    );
};
    

export default ToggleModal;