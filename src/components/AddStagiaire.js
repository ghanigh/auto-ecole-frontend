import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStagiaire() {
  const [stagiaire, setStagiaire] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    dateDebutFormation: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStagiaire({ ...stagiaire, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/stagiaires', stagiaire)
      .then(response => {
        console.log(response.data);
        navigate('/list');  // Redirige vers la liste des stagiaires après ajout
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  return (
    <div>
      <h2>Ajouter un Stagiaire</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={stagiaire.nom} onChange={handleChange} />
        <input type="text" name="prenom" placeholder="Prénom" value={stagiaire.prenom} onChange={handleChange} />
        <input type="date" name="dateNaissance" placeholder="Date de Naissance" value={stagiaire.dateNaissance} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={stagiaire.email} onChange={handleChange} />
        <input type="date" name="dateDebutFormation" placeholder="Date de Début de Formation" value={stagiaire.dateDebutFormation} onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddStagiaire;
