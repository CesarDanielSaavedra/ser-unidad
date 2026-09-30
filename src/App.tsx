import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Concept from './sections/Concept';
import Services from './sections/Services';
import About from './sections/About';
import Schedule from './sections/Schedule';
import Spaces from './sections/Spaces';
import Quote from './sections/Quote';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Concept />
        <Services />
        <About />
        <Schedule />
        <Spaces />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
