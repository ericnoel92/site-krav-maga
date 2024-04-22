import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importez le fichier CSS

export default class HomePage extends Component {
  render() {
    return (
      <div className="header">
        <h1>Site de Krav Maga</h1>
        <div className="button-container">
          <Link to="/Inscription">
            <button className="inscription-button">Inscription</button>
          </Link>
          <Link to="/Connexion">
            <button className="connexion-button">Connexion</button>
          </Link>
          <Link to="/Infos">
            <button className="infos-button">Infos</button>
          </Link>
          <Link to="/MAJ_Membres">
            <button className="maj-membres-button">MAJ Membres</button>
          </Link>
        </div>
      </div>
    );
  }
}
