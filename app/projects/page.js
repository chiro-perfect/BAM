"use client";

import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FaGithub, FaDatabase, FaBoxOpen, FaChartLine, FaUser, FaSearch } from 'react-icons/fa';
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
        <h1 className={styles.mainTitle}>EasyStock</h1>
        <p className={styles.subtitle}>Site web de gestion de stock réalisé pour l'Efrei Villejuif</p>

        <div className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <FaBoxOpen className={styles.icon} />
            <h2>Contexte du Projet</h2>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectDescription}>
              <p>
                EasyStock a été développé pour répondre aux besoins de gestion des produits, fournisseurs et commandes de l'école Efrei Villejuif. 
                L'objectif était d'optimiser et de simplifier les opérations de gestion des stocks à travers une interface intuitive.
              </p>

              <div className={styles.features}>
                <h4>Solution Proposée</h4>
                <p>
                  Développement d’un site web en PHP avec une base de données MySQL, offrant une interface réactive grâce à Bootstrap.
                </p>
              </div>

              <div className={styles.features}>
                <h4>Fonctionnalités Principales</h4>
                <ul>
                  <li><FaUser className={styles.featureIcon} /> Inscription et Authentification des utilisateurs</li>
                  <li><FaBoxOpen className={styles.featureIcon} /> Gestion des produits, fournisseurs et commandes (CRUD)</li>
                  <li><FaSearch className={styles.featureIcon} /> Recherche avancée de produits, fournisseurs et commandes</li>
                </ul>
              </div>

              <div className={styles.technicalDetails}>
                <h4>Architecture Technique</h4>
                <ul>
                  <li>Frontend : HTML, CSS, JavaScript</li>
                  <li>Framework : Bootstrap</li>
                  <li>Backend : PHP</li>
                  <li>Base de données : MySQL</li>
                </ul>
              </div>

              <div className={styles.features}>
                <h4>Procédure de Développement</h4>
                <ul>
                  <li>Conception et création de la base de données (utilisateurs, produits, fournisseurs, commandes)</li>
                  <li>Développement du back-end en PHP</li>
                  <li>Développement du front-end en HTML/CSS avec Bootstrap</li>
                  <li>Tests fonctionnels sur l’ensemble des modules</li>
                </ul>
              </div>

              <div className={styles.features}>
                <h4>Conclusion</h4>
                <p>
                  Le projet EasyStock offre une solution complète et fonctionnelle pour la gestion des stocks, mettant en pratique les compétences 
                  acquises en développement web et gestion de bases de données durant le cursus à l'Efrei Villejuif.
                </p>
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
