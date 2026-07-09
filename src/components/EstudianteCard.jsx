import React from 'react';

function EstudianteCard({ nombre, curso, sector }) {
  return (
    <div className="estudiante-card">
      <h3 className="estudiante-nombre">{nombre}</h3>
      <div className="estudiante-detalle">
        <p><strong>Curso:</strong> {curso}</p>
        <p><strong>Sector:</strong> {sector}</p>
      </div>
    </div>
  );
}

export default EstudianteCard;
