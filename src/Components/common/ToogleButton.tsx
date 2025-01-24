import { useState } from 'react';

interface ToggleButtonProps {
  initValue: string;  // Texto o URL de imagen
  alterValue: string;  // Texto o URL de imagen
  className?: string;
  initClassName?: string;
  alterClassName?: string;
  initAlt?: string;
  alterAlt?: string;
  onClick?: () => void;
}

const ToggleButton = ({
  initValue,
  alterValue,
  className,
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
    return value.endsWith('.jpg') || value.endsWith('.svg') || value.endsWith('.png') || value.endsWith('.gif');
  };

  return (
    <button 
      onClick={toggleButtonContent}
      className={className}
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