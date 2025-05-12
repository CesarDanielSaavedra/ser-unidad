import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useDictionary } from '../../hooks/useDictionary';  

import images from '../../assets/images/images.json';

import CardLayout from '../../components/common/CardLayout';
import Banner from './Sections/Banner';
import WelcomeSection from './Sections/WelcomeSection';

const Home = () => {

  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
  return (
    <div className="mx-auto bg-secondary-lightGray">

      <Banner title="Nuestra Filosofía" subtitle="Descubre lo que nos hace diferentes" />
     
      <WelcomeSection title={pages.home.welcomeSection.title} subtitle="Un espacio para conectar con tu interior, encontrar equilibrio y crecer a tu propio ritmo."/>
      
      <CardLayout />

    </div>
  );
};

export default Home;