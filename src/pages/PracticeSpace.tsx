import { useDictionary } from '../hooks/useDictionary';  
import { useLanguage } from '../hooks/useLanguage'; 

const PracticeSpace = () => {
  const { language } = useLanguage();
  const { pages } = useDictionary(language);   

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{pages['practice-space'].welcomeTitle}</h1>
      {pages['practice-space'].sections.map((section, index)=>(
        <section  key={index}>
          <h4 className="text-gray-700" key={`section-title-${index}`}>{section.title}</h4>
          {section.description.map((paragraph, index)=>(
            <p key={index}>{paragraph.split('\n').map((line, index)=>(
              <span key={index}>{line}<br /></span> 
              ))}
            </p>
          ))}
        </section>
      ))}
    </>
  );
};
export default PracticeSpace;