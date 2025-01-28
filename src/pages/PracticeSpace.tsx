import { useDictionary } from '../hooks/useDictionary';  
import { useLanguage } from '../hooks/useLanguage'; 

const PracticeSpace = () => {
  const { language } = useLanguage();
  const { pages } = useDictionary(language);   

  return (
    <>
      <h1 className="font-serif text-2xl font-bold mb-4">{pages['practice-space'].welcomeTitle}</h1>
      {pages['practice-space'].sections.map((section, index)=>(
        <section  key={index}>
          <h4 className="font-serif text-xl text-gray-700 mb-2" key={`section-title-${index}`}>{section.title}</h4>
          {section.description.map((paragraph, index)=>(
            <p key={index} className='font-vietnam text-gray-700 mb-4'>{paragraph.split('\n').map((line, index)=>(
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