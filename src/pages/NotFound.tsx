//import React from 'react';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-2">Página no encontrada</p>
        <p className="mt-4">La página que estás buscando no existe. Verifica la URL o regresa al inicio.</p>
      </div>
    </div>
  );
};

export default NotFound;