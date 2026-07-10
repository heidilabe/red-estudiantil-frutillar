import React, { useState } from 'react';
import { mockEstudiantes } from '../data/mockData';
import EstudianteCard from '../components/EstudianteCard';

const FORM_INICIAL = { nombre: '', curso: '', sector: '' };

function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState(mockEstudiantes);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formulario, setFormulario] = useState(FORM_INICIAL);
  const [errores, setErrores] = useState({});

  // ── Filtrar estudiantes por nombre ────────────────────────────────────
  const estudiantesFiltrados = estudiantes.filter((e) =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // ── Manejo del formulario ─────────────────────────────────────────────
  const handleCampo = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo al escribir
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!formulario.curso.trim()) nuevosErrores.curso = 'El curso es obligatorio.';
    if (!formulario.sector.trim()) nuevosErrores.sector = 'El sector es obligatorio.';
    return nuevosErrores;
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const nuevoEstudiante = {
      id: Date.now(),
      nombre: formulario.nombre.trim(),
      curso: formulario.curso.trim(),
      sector: formulario.sector.trim(),
    };

    setEstudiantes((prev) => [...prev, nuevoEstudiante]);
    setFormulario(FORM_INICIAL);
    setErrores({});
    setMostrarFormulario(false);
  };

  const handleCancelar = () => {
    setFormulario(FORM_INICIAL);
    setErrores({});
    setMostrarFormulario(false);
  };

  // ── Eliminar estudiante ───────────────────────────────────────────────
  const handleEliminar = (id, nombre) => {
    const confirmar = window.confirm(`¿Estás segura de que deseas eliminar a "${nombre}" de la lista?`);
    if (confirmar) {
      setEstudiantes((prev) => prev.filter((e) => e.id !== id));
    }
  };

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div className="page estudiantes-page">
      <div className="page-header">
        <h1>Administración de Estudiantes</h1>
        <p>Busca, agrega o elimina estudiantes inscritos en la red.</p>
      </div>

      {/* Barra de búsqueda y botón agregar */}
      <div className="actions-bar">
        <input
          type="text"
          placeholder="Buscar estudiante por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
        <button
          className="btn-add-active"
          onClick={() => setMostrarFormulario(true)}
        >
          + Agregar Estudiante
        </button>
      </div>

      {/* ── Modal / Formulario de agregar ────────────────────────────── */}
      {mostrarFormulario && (
        <div className="modal-overlay" onClick={handleCancelar}>
          <div
            className="modal-glass"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
          >
            <h2 id="modal-titulo" className="modal-titulo">Agregar Nuevo Estudiante</h2>

            <form onSubmit={handleAgregar} noValidate className="modal-form">
              {/* Campo Nombre */}
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej: Ana Silva"
                  value={formulario.nombre}
                  onChange={handleCampo}
                  className={`form-input ${errores.nombre ? 'input-error' : ''}`}
                  autoFocus
                />
                {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
              </div>

              {/* Campo Curso */}
              <div className="form-group">
                <label htmlFor="curso">Curso</label>
                <input
                  id="curso"
                  name="curso"
                  type="text"
                  placeholder="Ej: 1° Año - Ingeniería"
                  value={formulario.curso}
                  onChange={handleCampo}
                  className={`form-input ${errores.curso ? 'input-error' : ''}`}
                />
                {errores.curso && <span className="error-msg">{errores.curso}</span>}
              </div>

              {/* Campo Sector */}
              <div className="form-group">
                <label htmlFor="sector">Sector</label>
                <input
                  id="sector"
                  name="sector"
                  type="text"
                  placeholder="Ej: Frutillar Alto"
                  value={formulario.sector}
                  onChange={handleCampo}
                  className={`form-input ${errores.sector ? 'input-error' : ''}`}
                />
                {errores.sector && <span className="error-msg">{errores.sector}</span>}
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-modal-cancelar" onClick={handleCancelar}>
                  Cancelar
                </button>
                <button type="submit" className="btn-modal-guardar">
                  Guardar Estudiante
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Grilla de tarjetas ───────────────────────────────────────── */}
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
                <button
                  className="btn-action-delete"
                  onClick={() => handleEliminar(estudiante.id, estudiante.nombre)}
                >
                  Eliminar
                </button>
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
