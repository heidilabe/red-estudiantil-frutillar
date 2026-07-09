import React, { useState } from 'react';
import { mockEstudiantes } from '../data/mockData';
import EstudianteCard from '../components/EstudianteCard';

function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState(mockEstudiantes);
  const [busqueda, setBusqueda] = useState('');

  // Filtrar estudiantes por nombre (insensible a mayúsculas/minúsculas)
  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="page estudiantes-page">
      <div className="page-header">
        <h1>Administración de Estudiantes</h1>
        <p>Busca y visualiza la información de los estudiantes inscritos en la red.</p>
      </div>

      {/* Controles de Búsqueda y Acciones Futuras */}
      <div className="actions-bar">
        <input
          type="text"
          placeholder="Buscar estudiante por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
        <button className="btn-add-disabled" disabled title="Función disponible en la próxima versión">
          + Agregar Estudiante
        </button>
      </div>

      {/* Listado de Estudiantes */}
      <div className="estudiantes-grid">
        {estudiantesFiltrados.length > 0 ? (
          estudiantesFiltrados.map((estudiante) => (
            <div key={estudiante.id} className="card-container">
              <EstudianteCard
                nombre={estudiante.nombre}
                curso={estudiante.curso}
                sector={estudiante.sector}
              />
              <div className="card-actions-placeholder">
                <button className="btn-action-disabled" disabled>Editar</button>
                <button className="btn-action-disabled btn-danger" disabled>Eliminar</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron estudiantes que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
}

export default Estudiantes;
