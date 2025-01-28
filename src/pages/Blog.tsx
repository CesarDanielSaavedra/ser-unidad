import { useDictionary } from '../hooks/useDictionary'; 
import { useLanguage } from '../hooks/useLanguage';  

const Blog = () => {
  const { language } = useLanguage();
  const { pages } = useDictionary(language);  
  
    return (
      <>
        <h1 className="font-serif text-2xl font-bold mb-4">{pages.blog.welcomeTitle}</h1>
        {pages.blog.paragraphs.map((paragraph, index) => (
          <p key={index} className="font-vienam text-gray-700">
            {paragraph.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        ))}
      </>
      );
};

export default Blog;