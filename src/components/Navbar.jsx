import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Red Estudiantil Frutillar</div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#estudiantes">Estudiantes</a></li>
        <li><a href="#noticias">Noticias</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
