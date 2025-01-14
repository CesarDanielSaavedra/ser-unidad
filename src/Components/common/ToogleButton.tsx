import { useState } from 'react';

interface ToggleButtonProps {
    initValue: string;
    alterValue: string;
    onClick?: () => void;
}

 const  ToggleButton = ({ initValue, alterValue, onClick }: ToggleButtonProps) => {
    const [buttonText, setButtonText] = useState(initValue);
  
    const toggleButtonText = () => {
      setButtonText(prevText => prevText === initValue ? alterValue : initValue);
      if (onClick) onClick();
    };
  
    return (
      <button 
        onClick={toggleButtonText}
        className="ml-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
      >
        {buttonText}
      </button>
    );
  }
  export default ToggleButton