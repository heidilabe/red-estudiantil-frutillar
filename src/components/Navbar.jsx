import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  const handleNavClick = (tabName, isPage = true) => {
    if (isPage) {
      setActiveTab(tabName);
    } else {
      alert(`Sección "${tabName}" estará disponible próximamente en esta versión de demostración.`);
    }
  };

  return (
    <nav className="navbar-glass">
      <div className="navbar-brand">
        <span className="brand-icon">🎓</span>
        <span className="brand-text">Red Estudiantil Frutillar</span>
      </div>
      
      <ul className="navbar-nav-links">
        <li>
          <button 
            className={activeTab === 'inicio' ? 'active' : ''} 
            onClick={() => handleNavClick('inicio')}
          >
            Inicio
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'estudiantes' ? 'active' : ''} 
            onClick={() => handleNavClick('estudiantes')}
          >
            Estudiantes
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'noticias' ? 'active' : ''} 
            onClick={() => handleNavClick('noticias')}
          >
            Noticias
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('Nosotros', false)}>
            Nosotros
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('Reuniones', false)}>
            Reuniones
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('Documentos', false)}>
            Documentos
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick('Contacto', false)}>
            Contacto
          </button>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="btn-cta-nav" onClick={() => alert('¡Gracias por tu interés! Formulario de inscripción estará activo pronto.')}>
          Únete al Grupo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
