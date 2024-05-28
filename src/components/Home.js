import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/Home.css';

function Home() {
  return (
    <div>
      <img src={logo} alt="Logo" className="logo" />
      <h1>AUTO ECOLE DES BORDS DE MARNE</h1>
      <p>gestion examen et planning</p>
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
