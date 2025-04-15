"use client";

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { useState, useEffect } from 'react';
import { FaGraduationCap, FaCode, FaDatabase, FaProjectDiagram, FaTools } from 'react-icons/fa';
import styles from './bts-sio.module.css';
import Link from 'next/link';

export default function BtsSio() {
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
      <section className={styles.btsContainer}>
        <h1 className={styles.title}>BTS SIO SLAM</h1>
        <p className={styles.description}>
          Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac +2 qui forme des professionnels capables de gérer des projets informatiques et de développer des solutions adaptées aux besoins des entreprises. La spécialité SLAM (Solutions Logicielles et Applications Métiers) se concentre sur le développement d'applications et la gestion de bases de données.
        </p>
        
        <h2 className={styles.subtitle}>Compétences Acquises</h2>
        <div className={styles.bubbleContainer}>
          <div className={styles.bubble}>
            <li><FaCode className={styles.icon} /> Développement d'applications web et mobiles</li>
          </div>
          <div className={styles.bubble}>
            <li><FaDatabase className={styles.icon} /> Gestion de bases de données</li>
          </div>
          <div className={styles.bubble}>
            <li><FaProjectDiagram className={styles.icon} /> Analyse des besoins des utilisateurs</li>
          </div>
          <div className={styles.bubble}>
            <li><FaTools className={styles.icon} /> Conception et développement de solutions logicielles</li>
          </div>
          <div className={styles.bubble}>
            <li><FaGraduationCap className={styles.icon} /> Maintenance et évolution des systèmes d'information</li>
          </div>
        </div>

        <h2 className={styles.subtitle}>Sujets Étudiées</h2>
        <div className={styles.bubbleContainer}>
          <div className={styles.bubble}>
            <li><FaCode className={styles.icon} /> Programmation (Java, PHP, JavaScript)</li>
          </div>
          <div className={styles.bubble}>
            <li><FaCode className={styles.icon} /> Développement web (HTML, CSS, frameworks)</li>
          </div>
          <div className={styles.bubble}>
            <li><FaProjectDiagram className={styles.icon} /> Gestion de projet</li>
          </div>
          <div className={styles.bubble}>
            <li><FaDatabase className={styles.icon} /> Administration des systèmes et réseaux</li>
          </div>
          <div className={styles.bubble}>
            <li><FaGraduationCap className={styles.icon} /> Culture générale et expression</li>
          </div>
        </div>

        <div className={styles.pdfLinkContainer}>
          <Link href="https://efrei365net-my.sharepoint.com/:x:/g/personal/bachar_alaoui-medaghri_efrei_net/EagK7_9u55RIsJFzpsWpVaUBuvuCplaWXcQcoVcMQ_l9pQ?e=NLei4D" target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
            Tableau de synthèse - Epreuve E4 Portfolio - BTS SIO 2025
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
} 