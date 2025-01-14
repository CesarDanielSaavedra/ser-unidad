import { useDictionary } from '../hooks/useDictionary'; 
import { useLanguage } from '../hooks/useLanguage';  

const YogaClasses = () => {
  const { language } = useLanguage();
  const { pages } = useDictionary(language);
  
    return (
      <>
        <h1 className="text-2xl font-bold mb-4">{pages['yoga-classes'].welcomeTitle}</h1>
        {pages['yoga-classes'].paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        ))}
      </>
      );
};
export default YogaClasses;