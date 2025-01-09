import { useDictionary } from '../hooks/useDictionary';  

const Philosophy = () => {
  const { pages } = useDictionary();  
  
    return (
      <>
        <h1 className="text-2xl font-bold mb-4">{pages.philosophy.welcomeTitle}</h1>
        {pages.philosophy.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        ))}
      </>
      );
};

export default Philosophy;