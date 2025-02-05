import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useDictionary } from '../hooks/useDictionary';  

import images from '../assets/images/images.json';

const Home = () => {

  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
  return (
    <div className="mx-auto bg-secondary-lightGray">
      {/* Sección del banner */}
      <div 
        className="border rounded shadow-lg w-full h-[300px] bg-cover bg-center" 
        style={{backgroundImage: `url(${import.meta.env.BASE_URL}${images.pages.home.banner}`}}
      >
        <div className="w-full h-full flex items-end justify-start bg-black bg-opacity-30">
          <h1 className="mb-5 ml-4 font-serif text-secondary-lightGray lg:text-4xl text-2xl font-semibold">{pages.home.welcomeTitle}</h1>
        </div>
      </div>

      <div className="space-y-4 p-4">
        {Object.entries(pages.home.sections).map(([key, section]) => (
          <section key={key} className="p-4 bg-secondary-butter border rounded-xl shadow-lg">
            <h2 className="font-serif text-xl font-semibold">
              <Link to={`/${key}`} className="text-primary-light hover:underline">
                {section.title}
              </Link>
            </h2>
            <p className="font-vietnam text-secondary-gray">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;