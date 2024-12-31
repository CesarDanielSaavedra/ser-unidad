import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutSergio from './pages/AboutSergio';
// Aquí agregamos las demás vistas
// import YogaClasses from './pages/YogaClasses';
// import Meditation from './pages/Meditation';
// import CustomClasses from './pages/CustomClasses';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
// import Philosophy from './pages/Philosophy';
// import PracticeSpace from './pages/PracticeSpace';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSergio />} />
          {/* <Route path="yoga-classes" element={<YogaClasses />} />
          <Route path="meditation" element={<Meditation />} />
          <Route path="custom-classes" element={<CustomClasses />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="practice-space" element={<PracticeSpace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;