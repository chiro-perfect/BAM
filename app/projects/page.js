"use client";

import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FaGithub, FaDatabase, FaBoxOpen, FaChartLine } from 'react-icons/fa';
import styles from './projects.module.css';

export default function Projects() {
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
      <Navbar />
      <div className={styles.projectsContainer}>
        <h1 className={styles.mainTitle}>Mon Projet</h1>
        <p className={styles.subtitle}>Découvrez ma réalisation en développement</p>

        <div className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <FaBoxOpen className={styles.icon} />
            <h2>Système de Gestion de Stock</h2>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectDescription}>
              <h3>Description du Projet</h3>
              <p>
                Application web de gestion de stock développée pour optimiser le suivi des produits 
                et la gestion des inventaires. Cette solution permet aux entreprises de gérer 
                efficacement leurs stocks en temps réel.
              </p>

              <div className={styles.features}>
                <h4>Fonctionnalités Principales</h4>
                <ul>
                  <li>
                    <FaDatabase className={styles.featureIcon} />
                    Gestion complète des produits (ajout, modification, suppression)
                  </li>
                  <li>
                    <FaBoxOpen className={styles.featureIcon} />
                    Suivi des entrées et sorties de stock
                  </li>
                  <li>
                    <FaChartLine className={styles.featureIcon} />
                    Tableaux de bord et statistiques en temps réel
                  </li>
                </ul>
              </div>

              <div className={styles.technicalDetails}>
                <h4>Détails Techniques</h4>
                <ul>
                  <li>Frontend : React.js </li>
                  <li>Backend : Node.js </li>
                  <li>Base de données : SQL</li>

                </ul>
              </div>
            </div>

            <div className={styles.projectLinks}>
              <a 
                href="https://github.com/chiro-perfect" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                Voir le code sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 