"use client";

import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { FaNetworkWired, FaTools, FaCode } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function Skills() {
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
      <section id="skills" className="section">
        <h2 className={styles.skillsTitle}>Compétences</h2>
        <div className="skills-container">
          <div className="skill-group">
            <h3 className="skill-title">
              <FaNetworkWired size={40} color="var(--accent)" />
              <br/>
              Réseaux
            </h3>
            <div className="skill-cards">
              <div className="skill-card">
                <FaNetworkWired size={40} color="var(--accent)" />
                <h4>Installation Réseaux</h4>
                <p>Connaissance de base des environnements réseau, y compris LAN, WAN et Wi-Fi.</p>
              </div>
              <div className="skill-card">
                <FaTools size={40} color="var(--accent)" />
                <h4>Gestion des Utilisateurs</h4>
                <p>Gestion des utilisateurs et des permissions dans divers systèmes.</p>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3 className="skill-title">
              <FaTools size={40} color="var(--accent)" />
              <br />
              Bureautique
            </h3>
            <div className="skill-cards">
              <div className="skill-card">
                <FaTools size={40} color="var(--accent)" />
                <h4>Outils Bureautiques</h4>
                <p>Maîtrise de Word, Excel, PowerPoint et autres outils bureautiques.</p>
              </div>
              <div className="skill-card">  
                <FaTools size={40} color="var(--accent)" />
                <h4>Montage/Démontage PC</h4>
                <p>Compétences en montage et démontage de PC, ainsi qu'en installation et mise en service.</p>
              </div>
            </div>
          </div>
          <div className="skill-group">
            <h3 className="skill-title">
              <FaCode size={40} color="var(--accent)" />
              <br />
              Développement
            </h3>
            <div className="skill-cards">
              <div className="skill-card">
                <SiHtml5 size={40} color="var(--accent)" />
                <h4>HTML</h4>
                <p>Développeur HTML, avec une connaissance de base des standards web.</p>
              </div>
              <div className="skill-card">
                <SiCss3 size={40} color="var(--accent)" />
                <h4>CSS</h4>
                <p>Compétences en CSS pour le stylage des pages web.</p>
              </div>
              <div className="skill-card">
                <SiJavascript size={40} color="var(--accent)" />
                <h4>JavaScript</h4>
                <p>Développement JavaScript, niveau débutant, avec une compréhension des bases.</p>
              </div>
              <div className="skill-card">
                <SiReact size={40} color="var(--accent)" />
                <h4>React</h4>
                <p>Gestion de projets avec le framework React.</p>
              </div>
              <div className="skill-card">
                <SiNodedotjs size={40} color="var(--accent)" />
                <h4>Node.js</h4>
                <p>Connaissance de base de Node.js pour le développement côté serveur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}