import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Estudiantes from './pages/Estudiantes';
import Noticias from './pages/Noticias';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Home />;
      case 'estudiantes':
        return <Estudiantes />;
      case 'noticias':
        return <Noticias />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
