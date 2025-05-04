"use client";
import Navbar from "../components/navbar/navbar";
import Footer from '../components/footer/footer';

import { useState, useEffect } from 'react';
import {
  FaBriefcase, FaLaptopCode, FaLock, FaScrewdriver, FaUserTie, FaUniversity, FaStore, FaTasks, FaGraduationCap,
  FaFolderOpen, FaCodeBranch, FaDatabase, FaProjectDiagram, FaMobileAlt, FaNetworkWired, FaBolt,
  FaLightbulb, FaHardHat, FaClipboard, FaCube, FaTag, FaTools
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
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaLaptopCode size={20} color="var(--accent)" /> Développeur Web & Assistant Gestion</h3>
            <p><strong>Nom d'entreprise :</strong> Velyvelo</p>
            <p><strong>Durée :</strong> 11/2023 - 07/2025</p>
            <p><strong>Localisation :</strong> Arcueil, France</p>
            <h4>Missions :</h4>
            <ul>
              <li><FaFolderOpen color="var(--accent)" /> Gestion de la facturation via Evoliz : devis, commandes, avoirs, impayés</li>
              <li><FaTasks color="var(--accent)" /> Suivi du grand livre de facturation et relation client (paiements, relances)</li>
              <li><FaLaptopCode color="var(--accent)" /> Évolution du site web et amélioration UX/UI</li>
              <li><FaHardHat color="var(--accent)" /> Suivi des réparations de vélos, gestion de stock, mise en place de processus logistiques</li>
            </ul>
          </div>

          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaStore size={20} color="var(--accent)" /> Technicien Informatique</h3>
            <p><strong>Nom d'entreprise :</strong> PC Maestro</p>
            <p><strong>Durée :</strong> 01/2023 - 02/2023</p>
            <p><strong>Localisation :</strong> Cork, Irlande</p>
            <h4>Missions :</h4>
            <ul>
              <li><FaClipboard color="var(--accent)" /> Accueil et accompagnement client en boutique</li>
              <li><FaHardHat color="var(--accent)" /> Diagnostic, réparation et mise à jour de PC</li>
              <li><FaTag color="var(--accent)" /> Conseil en choix de matériel informatique</li>
              <li><FaFolderOpen color="var(--accent)" /> Préparation, remise en état, et gestion de stock de matériel</li>
            </ul>
          </div>

          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaUniversity size={20} color="var(--accent)" /> Stagiaire en Ingénierie</h3>
            <p><strong>Nom d'entreprise :</strong> IUT de Cachan</p>
            <p><strong>Durée :</strong> 11/2022 - 12/2022</p>
            <p><strong>Localisation :</strong> Cachan, France</p>
            <h4>Missions :</h4>
            <ul>
              <li><FaCube color="var(--accent)" /> Conception 3D sur SolidWorks et impression de prototypes</li>
              <li><FaClipboard color="var(--accent)" /> Tests de validation fonctionnelle</li>
              <li><FaBolt color="var(--accent)" /> Réalisation de soudures électroniques et montage de systèmes</li>
            </ul>
          </div>

          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaLaptopCode size={20} color="var(--accent)" /> Développeur Junior</h3>
            <p><strong>Nom d'entreprise :</strong> Eastechnology</p>
            <p><strong>Durée :</strong> 01/2022 - 04/2022</p>
            <h4>Missions :</h4>
            <ul>
              <li><FaFolderOpen color="var(--accent)" /> Intégration de plugins et création de shortcodes WordPress</li>
              <li><FaMobileAlt color="var(--accent)" /> Développement d'une application mobile (GoodBarber)</li>
              <li><FaClipboard color="var(--accent)" /> Organisation et gestion de dossiers partagés sur OneDrive</li>
            </ul>
          </div>

          <div className="experience-card" style={{ flex: '1 1 30%', margin: '10px' }}>
            <h3 className="experience-title" style={{ fontSize: '1.8rem' }}><FaNetworkWired size={20} color="var(--accent)" /> Responsable Infrastructures Réseaux et Sécurité</h3>
            <p><strong>Nom d'entreprise :</strong> ICF Habitat </p>
            <p><strong>Durée :</strong> 05/2021 - 07/2021</p>
            <p><strong>Localisation :</strong> Paris, France</p>
            <h4>Missions :</h4>
            <ul>
              <li><FaNetworkWired color="var(--accent)" /> Optimisation de réseaux (routeurs, commutateurs, firewalls)</li>
              <li><FaClipboard color="var(--accent)" /> Gestion des adresses IP et documentation réseaux</li>
              <li><FaLock color="var(--accent)" /> Réponse aux cyberattaques : isolation, détection, amélioration de sécurité</li>
              <li><FaTasks color="var(--accent)" /> Gestion des tickets de support technique</li>
              <li><FaHardHat color="var(--accent)" /> Organisation du déménagement de Data Center</li>
            </ul>
          </div>
        </div>

        <h2>
          <FaGraduationCap size={40} color="var(--accent)" />
          <br />
          Diplômes
        </h2>
        <div className="skills-container">
          <div className="skill-group" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}>BTS SIO SLAM</h4>
              <p><strong>En cours d'obtention :</strong> 2023 - 2025</p>
              <p><strong>Établissement :</strong> EFREI, Villejuif</p>
            </div>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}>Baccalauréat Professionnel Systèmes Numériques</h4>
              <p><strong>Date d'obtention :</strong> 2022</p>
              <p><strong>Établissement :</strong> Lycée Polyvalent de Cachan</p>
            </div>
            <div className="skill-card" style={{ width: '300px' }}>
              <h4 className="diplome-title" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)' }}>Brevet des Collèges</h4>
              <p><strong>Date d'obtention :</strong> 2019</p>
              <p><strong>Établissement :</strong> Collège Dulcie September, Arcueil</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
