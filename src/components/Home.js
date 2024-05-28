import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue à l'Auto-école</h1>
      <nav>
        <ul>
          <li><Link to="/add">Ajouter un Stagiaire</Link></li>
          <li><Link to="/list">Liste des Stagiaires</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
