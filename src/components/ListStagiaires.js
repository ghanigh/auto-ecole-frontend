import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListStagiaires() {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stagiaires')
      .then(response => {
        setStagiaires(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Stagiaires</h2>
      <ul>
        {stagiaires.map(stagiaire => (
          <li key={stagiaire._id}>
            {stagiaire.nom} {stagiaire.prenom}, {stagiaire.email}, {stagiaire.dateDebutFormation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListStagiaires;
