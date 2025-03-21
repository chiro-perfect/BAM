"use client";                                                                                                                                     
import Navbar from "../components/navbar/navbar";
import Footer from '../components/footer/footer';

import { useState, useEffect } from 'react';
import {
  FaBriefcase, FaLaptopCode, FaLock, FaScrewdriver, FaUserTie, FaUniversity, FaStore, FaTasks, FaGraduationCap, 
  FaFolderOpen, FaCodeBranch, FaDatabase, FaProjectDiagram, FaMobileAlt, FaNetworkWired, FaBolt, 
  FaLightbulb, FaHardHat, FaClipboard, FaCube, FaTag,
  FaVolumeOff
} from 'react-icons/fa';

export default function Experience() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageUrl = '/image/logo.png';
    const img = new window.Image();
    img.src = imageUrl;

    img.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    };

    img.onerror = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div>
      {/* {loading && <Loader />} */}
      <Navbar />
      <section id="experience" className="section">
        <h2>
          <FaBriefcase size={40} color="var(--accent)" />
          <br />
          Expériences Professionnelles
        </h2>
        <div className="experience-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaLaptopCode size={20} color="var(--accent)" /> Velyvelo</h3>
            <p><strong>Poste :</strong> Aide au développement du site web de l'entreprise</p>
            <p><strong>Durée :</strong> Depuis novembre 2023</p>
            <p><strong>Localisation :</strong> Arcueil</p>
            <h4>Mission :</h4>
            <ul>
              <li><FaFolderOpen color="var(--accent)" /> Gestion de facturation avec Evoliz</li>
              <li><FaTasks color="var(--accent)" /> Gestion de grand livre de facturation</li>
              <li><FaClipboard color="var(--accent)" /> Gestion de commandes, devis, avoirs, acomptes et des impayés</li>
              <li><FaUserTie color="var(--accent)" /> Aide aux clients</li>
              <li><FaCodeBranch color="var(--accent)" /> Aide au développement du site avec les idées reçues et les demandes de l'entreprise</li>
              <li><FaHardHat color="var(--accent)" /> Gestion des flottes de vélos, des réparations et du stockage</li>
            </ul>
          </div>
          
          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaUniversity size={20} color="var(--accent)" /> IUT de Cachan</h3>
            <p><strong>Poste :</strong> Stage de terminale</p>
            <p><strong>Durée :</strong> De novembre 2022 à décembre 2022</p>
            <p><strong>Localisation :</strong> Cachan 94230</p>
            <h4>Partie informatique :</h4>
            <ul>
              <li><FaCube color="var(--accent)" /> Impression 3D</li>
              <li><FaLightbulb color="var(--accent)" /> Configuration</li>
              <li><FaProjectDiagram color="var(--accent)" /> Visualisation SolidWorks</li>
              <li><FaClipboard color="var(--accent)" /> Test et validation du fonctionnement des appareils</li>
            </ul>
            <h4>Partie électronique :</h4>
            <ul>
              <li><FaBolt color="var(--accent)" /> Soudure</li>
              <li><FaScrewdriver color="var(--accent)" /> Câblage</li>
              <li><FaHardHat color="var(--accent)" /> Montage</li>
              <li><FaDatabase color="var(--accent)" /> Démontage</li>
            </ul>
          </div>

          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaStore size={20} color="var(--accent)" /> Stage en Irlande chez PC Maestro</h3>
            <p><strong>Poste :</strong> Stage de terminale</p>
            <p><strong>Durée :</strong> De janvier 2023 à février 2023</p>
            <p><strong>Localisation :</strong> Cork (IRELAND)</p>
            <h4>Mission :</h4>
            <ul>
              <li><FaClipboard color="var(--accent)" /> Mettre des plugins sur le site de l'entreprise (WordPress)</li>
              <li><FaFolderOpen color="var(--accent)" /> Traitement de dossier (OneDrive)</li>
              <li><FaMobileAlt color="var(--accent)" /> Création d'une application mobile (GoodBarber)</li>
              <li><FaLightbulb color="var(--accent)" /> Mettre un trigger qui générera des shortcodes (pour afficher un contenu spécifique dans l'emplacement voulu)</li>
            </ul>
          </div>
        </div>

        <h2>
          <FaGraduationCap size={40} color="var(--accent)" />
          <br />
          DIPLOMES
        </h2>
        <div className="skills-container">
          <div className="skill-group" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}><strong>BTS SIO SLAM</strong></h4>
              <p><strong>En cours d'obtention :</strong> 2023 - 2025</p>
              <p><strong>Adresse :</strong> École d'ingénieurs EFREI, 30-32 Av. de la République, 94800 Villejuif</p>
            </div>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}><strong>BACCALAURÉAT PROFESSIONNEL SYSTÈME NUMÉRIQUES</strong></h4>
              <p><strong>Date d'obtention :</strong> Septembre 2020</p>
              <p><strong>Adresse :</strong> Lycée polyvalent de Cachan, 63 Av. du Président Wilson, 94230 Cachan</p>
            </div>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}><strong>BREVET DES COLLÈGES</strong></h4>
              <p><strong>Date d'obtention :</strong> Juillet 2020</p>
              <p><strong>Adresse :</strong> Collège Dulcie September, Arcueil, France</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}