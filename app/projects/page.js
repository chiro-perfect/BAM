"use client";

import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FaGithub, FaDatabase, FaBoxOpen, FaChartLine, FaUser, FaSearch, FaLock, FaUsers, FaDolly, FaShoppingCart, FaClipboardList, FaFileInvoiceDollar, FaLaptopMedical, FaCogs } from 'react-icons/fa';
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
        <h1 className={styles.mainTitle}>Projets EasyStock</h1>
        <p className={styles.subtitle}>Deux applications complémentaires pour une gestion de stock complète</p>

        {/* Projet 1: EasyStock - Application de Gestion de Stock (Côté Client) */}
        <div className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <FaShoppingCart className={styles.icon} />
            <h2>EasyStock - Application de Gestion de Stock (Côté Client)</h2>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectDescription}>
              <p>
                Le projet EasyStock est une application web conçue spécifiquement pour l'École Efrei Villejuif. Son objectif principal est de fournir une solution simple et intuitive pour la gestion des produits et le suivi des commandes du point de vue de l'utilisateur final (client). Il s'agit d'une application côté client qui met l'accent sur la facilité d'utilisation et la transparence des opérations d'inventaire.
              </p>

              <div className={styles.features}>
                <h4>Fonctionnalités Clés Côté Client</h4>
                <ul>
                  <li><FaLock className={styles.featureIcon} /> Inscription et Authentification Sécurisée : Création de compte avec mots de passe hachés (password_hash()) et conformité RGPD/CNIL : minimum 12 caractères, incluant majuscules, minuscules, chiffres et caractères spéciaux. Connexion sécurisée avec `password_verify()`. Message de bienvenue personnalisé.</li>
                  <li><FaSearch className={styles.featureIcon} /> Gestion et Consultation des Produits : Catalogue clair avec recherche par nom ou catégorie et filtrage. Une section "Top 3" présente les produits les plus commandés au cours des trois derniers mois.</li>
                  <li><FaShoppingCart className={styles.featureIcon} /> Le Panier et la Page des Commandes : Ajout au panier via `localStorage` avec un compteur dynamique dans le header. Visualisation, gestion (quantités, suppression) et validation du panier (requête AJAX à `process_order.php` qui gère la base de données et le stock).</li>
                  <li><FaClipboardList className={styles.featureIcon} /> Historique des Commandes : Affichage des commandes "en cours" (en préparation, expédiée) et un historique complet des commandes "traitées", "livrées" ou "annulées", directement récupérées de la base de données.</li>
                </ul>
              </div>

              <div className={styles.technicalDetails}>
                <h4>Architecture et Technologies</h4>
                <ul>
                  <li>Front-end : HTML, CSS (avec un thème sombre moderne et responsif), JavaScript (interactivité, `localStorage`, Fetch API).</li>
                  <li>Back-end : PHP (logique métier, connexion MySQL, authentification, traitement des commandes).</li>
                  <li>Base de données : MySQL (utilisateurs, produits, commandes, détails de commandes).</li>
                </ul>
              </div>

              <div className={styles.features}>
                <h4>Conclusion</h4>
                <p>
                  EasyStock offre une solution complète et sécurisée pour la gestion des stocks du côté client, garantissant une bonne expérience utilisateur et une traçabilité efficace des produits et des commandes. Ce projet met en pratique des compétences essentielles en développement web et en gestion de bases de données.
                </p>
              </div>

            </div>

            <div className={styles.projectLinks}>
              <a 
                href="https://github.com/chiro-perfect/EasyStock_Client" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                Voir le code sur GitHub (Client)
              </a>
            </div>
          </div>
        </div>

        {/* Projet 2: EasyStock Admin - Application de Gestion de Stock (Client Lourd) */}
        <div className={styles.projectCard}>
          <div className={styles.projectHeader}>
            <FaLaptopMedical className={styles.icon} /> 
            <h2>EasyStock Admin - Application de Gestion de Stock (Client Lourd)</h2>
          </div>

          <div className={styles.projectContent}>
            <div className={styles.projectDescription}>
              <p>
                Le projet EasyStock Admin est une application de bureau robuste, développée avec Electron, conçue spécifiquement pour l'École Efrei Villejuif. Son objectif est de fournir une interface intuitive et fonctionnelle aux administrateurs pour gérer efficacement les fournisseurs, les produits, les commandes et les utilisateurs. Elle utilise la même base de données que le projet web EasyStock.
              </p>

              <div className={styles.features}>
                <h4>Fonctionnalités Clés Côté Administration</h4>
                <ul>
                  <li><FaLock className={styles.featureIcon} /> Authentification et Accès Sécurisé : Accès exclusif aux rôles 'admin'. Mots de passe hachés (`bcryptjs`). Communication sécurisée via IPC (Inter-Process Communication) et `preload.js` pour l'isolation.</li>
                  <li><FaUsers className={styles.featureIcon} /> Gestion des Utilisateurs : Consultation, mise à jour (y compris les rôles), création et suppression des comptes utilisateurs.</li>
                  <li><FaDolly className={styles.featureIcon} /> Gestion des Fournisseurs : Ajout, modification, suppression et consultation du répertoire des fournisseurs (coordonnées, etc.).</li>
                  <li><FaBoxOpen className={styles.featureIcon} /> Gestion des Produits : Administration complète du catalogue (désignation, quantité, prix, fournisseur). Visualisation des stocks avec des graphiques par catégorie.</li>
                  <li><FaClipboardList className={styles.featureIcon} /> Gestion des Commandes : Suivi de toutes les commandes passées, mise à jour des statuts (par exemple : "en cours" à "traitée") et consultation des détails des produits par commande.</li>
                  <li><FaFileInvoiceDollar className={styles.featureIcon} /> Gestion des Achats : Enregistrement et suivi des transactions effectuées auprès des fournisseurs, avec mise à jour des statuts d'achat.</li>
                  <li><FaChartLine className={styles.featureIcon} /> Tableau de Bord et Rapports Statistiques : Affichage d'indicateurs clés (produits en faible stock, activités récentes) et génération de rapports détaillés pour l'analyse.</li>
                </ul>
              </div>

              <div className={styles.technicalDetails}>
                <h4>Architecture et Technologies</h4>
                <ul>
                  <li>Front-end (Processus de Rendu) : HTML/CSS, JavaScript, Electron Renderer Process.</li>
                  <li>Back-end (Processus Principal) : Node.js (logique métier, sécurité, base de données), IPC, `preload.js`, `mysql2/promise`, `bcryptjs`, `dotenv`.</li>
                  <li>Base de Données : MySQL (partagée avec EasyStock web : User, Fournisseur, Achat, Produit, Commande).</li>
                </ul>
              </div>

              <div className={styles.features}>
                <h4>Sécurité</h4>
                <ul>
                  <li>Isolation du Contexte & Désactivation Node.js : Empêche le code web d'accéder directement aux ressources système.</li>
                  <li>API `contextBridge` : Expose uniquement les fonctions nécessaires de manière contrôlée.</li>
                  <li>Hachage des Mots de Passe : Utilisation de `bcryptjs` pour un stockage sécurisé.</li>
                  <li>Validation des Entrées : Toutes les données utilisateur sont validées pour prévenir les injections SQL et autres vulnérabilités.</li>
                </ul>
              </div>

            </div>

            <div className={styles.projectLinks}>
              <a 
                href="https://github.com/chiro-perfect/EasyStock_Admin" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                Voir le code sur GitHub (Admin)
              </a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};