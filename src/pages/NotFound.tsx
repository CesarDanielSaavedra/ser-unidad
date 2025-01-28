import { useDictionary } from '../hooks/useDictionary'; 
import { useLanguage } from '../hooks/useLanguage'; 

const NotFound = () => {
  const { language } = useLanguage();
  const { pages } = useDictionary(language);   

  return (
    <>
      <h1 className="font-serif text-4xl font-bold mb-4">{pages['not-found'].welcomeTitle}</h1>
      {pages['not-found'].paragraphs.map((paragraph, index) => (
        <p key={index} className="font-vienam text-gray-700">
          {paragraph.split("\n").map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>
      ))}
    </>
  );
};
export default NotFound;