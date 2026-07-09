import React from 'react';
import { mockNoticias, mockReuniones, mockDocumentos, mockMiembros } from '../data/mockData';
import '../styles/Home.css';

function Home() {
  return (
    <div className="landing-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulsando el futuro de los<br />
            <span className="highlight">Estudiantes de Frutillar</span>
          </h1>
          <p className="hero-description">
            Organización dedicada a conectar, apoyar y gestionar soluciones de transporte nocturno, 
            beneficios y recursos clave para estudiantes de Frutillar que viajan a diario a Puerto Montt.
          </p>
          <div className="hero-actions">
            <button 
              className="btn-primary-grad" 
              onClick={() => alert('Próxima reunión informativa: 14 de Julio a las 18:30 hrs.')}
            >
              Próxima Reunión
            </button>
            <button 
              className="btn-secondary-outline" 
              onClick={() => alert('Descargando o visualizando Estatutos de la Red...')}
            >
              Ver Estatutos
            </button>
          </div>
        </div>
        
        <div className="hero-media-wrapper">
          <div className="hero-illustration-placeholder">
            {/* Gradiente animado decorativo en el CSS */}
          </div>
          {/* Tarjeta Flotante en 3D */}
          <div className="hero-floating-card">
            <div className="floating-card-title">🚌 Conectividad Segura</div>
            <div className="floating-card-desc">
              Coordinando el transporte nocturno de regreso para que ningún estudiante se quede sin locomoción.
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE WIDGETS */}
      <section className="widgets-grid">
        {/* Widget 1: Últimas Noticias */}
        <div className="widget-card">
          <h2 className="widget-title">📢 Últimas Noticias</h2>
          <ul className="widget-list">
            {mockNoticias.map((noticia) => (
              <li key={noticia.id} className="widget-item">
                <span className="item-meta">{noticia.fecha}</span>
                <span className="item-title">{noticia.titulo}</span>
                <p className="item-desc">{noticia.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Widget 2: Próximas Reuniones */}
        <div className="widget-card">
          <h2 className="widget-title">📅 Reuniones</h2>
          <ul className="widget-list">
            {mockReuniones.map((reunion) => (
              <li key={reunion.id} className="widget-item reunion-item">
                <span className="item-meta">{reunion.fecha} — {reunion.hora}</span>
                <span className="item-title">{reunion.titulo}</span>
                <p className="item-desc">Lugar: {reunion.lugar}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Widget 3: Documentos Clave */}
        <div className="widget-card">
          <h2 className="widget-title">📁 Documentos</h2>
          <ul className="widget-list">
            {mockDocumentos.map((doc) => (
              <li key={doc.id}>
                <a 
                  href={`#descargar-${doc.id}`} 
                  className="doc-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Iniciando descarga de ${doc.nombre}`);
                  }}
                >
                  <span className="doc-name">📄 {doc.nombre}</span>
                  <span className="doc-size">{doc.tamano}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Widget 4: Nuevos Miembros */}
        <div className="widget-card">
          <h2 className="widget-title">👥 Directiva y Miembros</h2>
          <div className="member-avatar-list">
            {mockMiembros.map((miembro) => (
              <div key={miembro.id} className="member-item">
                <div className="avatar-circle">{miembro.inicial}</div>
                <div className="member-info">
                  <span className="member-name">{miembro.nombre}</span>
                  <span className="member-role">{miembro.rol}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ESTADÍSTICAS / MISIÓN */}
      <section className="mision-stats-section">
        <div className="mision-content">
          <span className="mision-tag">Nuestra Misión</span>
          <h2 className="mision-title">Comprometidos con el futuro estudiantil</h2>
          <p className="mision-text">
            Facilitamos la vida académica de quienes viajan a diario para superarse profesionalmente, 
            garantizando que la distancia y los horarios nocturnos no sean un obstáculo para cumplir sus metas.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-box">
            <h3 className="stat-number">150+</h3>
            <span className="stat-label">Estudiantes</span>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">10+</h3>
            <span className="stat-label">Reuniones</span>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">5+</h3>
            <span className="stat-label">Logros</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
