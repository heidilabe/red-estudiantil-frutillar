import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Red Estudiantil Frutillar</div>
      <ul className="navbar-links">
        <li>
          <button 
            className={activeTab === 'inicio' ? 'active' : ''} 
            onClick={() => setActiveTab('inicio')}
          >
            Inicio
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'estudiantes' ? 'active' : ''} 
            onClick={() => setActiveTab('estudiantes')}
          >
            Estudiantes
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'noticias' ? 'active' : ''} 
            onClick={() => setActiveTab('noticias')}
          >
            Noticias
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
