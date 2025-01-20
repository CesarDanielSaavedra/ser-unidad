import { useState } from 'react';

interface ToggleButtonProps {
  initValue: string;  // Texto o URL de imagen
  alterValue: string;  // Texto o URL de imagen
  initClassName?: string;
  alterClassName?: string;
  initAlt?: string;
  alterAlt?: string;
  onClick?: () => void;
}

const ToggleButton = ({
  initValue,
  alterValue,
  initClassName,
  alterClassName,
  initAlt,
  alterAlt,
  onClick,
}: ToggleButtonProps) => {
  const [buttonContent, setButtonContent] = useState(initValue);

  const toggleButtonContent = () => {
    setButtonContent(prevContent => prevContent === initValue ? alterValue : initValue);
    if (onClick) onClick();
  };

  const isImageUrl = (value: string) => {
    return value.endsWith('.jpg') || value.endsWith('.svg');
  };

  return (
    <button 
      onClick={toggleButtonContent}
      className="ml-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-200"
    >
      {isImageUrl(buttonContent) ? (
        <img 
          src={buttonContent} 
          alt={buttonContent === initValue ? initAlt : alterAlt} 
          className={buttonContent === initValue ? initClassName : alterClassName} />
      ) : (
        buttonContent
      )}
    </button>
  );
};

export default ToggleButton;