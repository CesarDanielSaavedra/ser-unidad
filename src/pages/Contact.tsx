import { useDictionary } from '../hooks/useDictionary';  

const Contact = () => {
  const { pages } = useDictionary();  
  
    return (
      <>
        <h1 className="text-2xl font-bold mb-4">{pages.contact.welcomeTitle}</h1>
        {pages.contact.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        ))}
      </>
      );
};

export default Contact;