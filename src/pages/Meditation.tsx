import { useDictionary } from '../hooks/useDictionary';  

const Meditation = () => {
  const { pages } = useDictionary();  
  
    return (
      <>
        <h1 className="text-2xl font-bold mb-4">{pages.meditation.welcomeTitle}</h1>
        {pages.meditation.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        ))}
      </>
      );
};  

export default Meditation;