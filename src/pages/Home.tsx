//import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a nuestro sitio web</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/about" className="text-blue-500 hover:underline">
              Acerca de Sergio
            </Link>
          </h2>
          <p className="text-gray-700">
            Conoce más sobre Sergio y su experiencia en yoga, meditación y desarrollo personal.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/yoga-classes" className="text-blue-500 hover:underline">
              Clases de Yoga
            </Link>
          </h2>
          <p className="text-gray-700">
            Explora nuestras clases de yoga para todos los niveles.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/meditation" className="text-blue-500 hover:underline">
              Clases de Meditación
            </Link>
          </h2>
          <p className="text-gray-700">
            Únete a nuestras clases de meditación y alcanza la paz interior.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/custom-classes" className="text-blue-500 hover:underline">
              Clases Personalizadas
            </Link>
          </h2>
          <p className="text-gray-700">
            Clases adaptadas a tus necesidades y horarios.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/blog" className="text-blue-500 hover:underline">
              Blog
            </Link>
          </h2>
          <p className="text-gray-700">
            Lee nuestros artículos sobre yoga, meditación y bienestar.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/contact" className="text-blue-500 hover:underline">
              Contacto
            </Link>
          </h2>
          <p className="text-gray-700">
            Ponte en contacto con nosotros para más información.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/philosophy" className="text-blue-500 hover:underline">
              Filosofía Aplicada
            </Link>
          </h2>
          <p className="text-gray-700">
            Descubre nuestra filosofía en yoga y bienestar integral.
          </p>
        </div>

        <div className="p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">
            <Link to="/practice-space" className="text-blue-500 hover:underline">
              Espacio de Práctica
            </Link>
          </h2>
          <p className="text-gray-700">
            Conoce nuestro espacio donde puedes practicar yoga y meditación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;