"use client";

import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { useState, useEffect } from 'react';
import { FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import styles from './veille.module.css';

export default function Veille() {
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
      <div className={styles.veilleContainer}>
        <h1 className={styles.mainTitle}>Veille Technologique</h1>
        <p className={styles.subtitle}>Suivi des dernières actualités et innovations dans le domaine de l'informatique</p>

        {/* Thématique 1: Intelligence Artificielle */}
        <section className={styles.themeSection}>
          <div className={styles.themeHeader}>
            <FaLaptopCode className={styles.icon} />
            <h2>Intelligence Artificielle</h2>
          </div>
          
          <div className={styles.articlesList}>
            <article className={styles.articleCard}>
              <h3>Piloter l'infrastructure de demain : l'IA en première ligne</h3>
              <p>L'IA est désormais indispensable pour gérer et optimiser les infrastructures IT. Découvrez comment elle révolutionne les opérations.</p>
              <a href="https://www.actuia.com/contribution/romain-pia/piloter-linfrastructure-de-demain-lia-en-premiere-ligne/#:~:text=L'IA%2C%20un%20levier%20de%20d%C3%A9fense,-L'apport%20de&text=La%20technologie%20constitue%20%C3%A9galement%20un,pour%20l'ann%C3%A9e%2020241." target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 17 Juin 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>L'IA à la française : entre ambitions souveraines et course mondiale</h3>
              <p>La France se positionne sur l'échiquier mondial de l'IA. Explorez sa stratégie pour une IA souveraine et compétitive.</p>
              <a href="https://www.cnrs.fr/fr/actualite/lia-la-francaise-entre-ambitions-souveraines-et-course-mondiale" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 18 Juin 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>IA : la France a besoin de terrains d'action. À Lille, nous avons pris de l'avance.</h3>
              <p> La France doit intensifier ses expérimentations en IA. Découvrez l'exemple de Lille, pionnière dans l'application concrète de l'IA.</p>
              <a href="https://www.actuia.com/actualite/ia-la-france-a-besoin-de-terrains-daction-a-lille-nous-avons-pris-de-lavance/" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 13 Juin 2025</span>
            </article>
          </div>
        </section>

        {/* Thématique 2: Cybersécurité */}
        <section className={styles.themeSection}>
          <div className={styles.themeHeader}>
            <FaShieldAlt className={styles.icon} />
            <h2>Cybersécurité</h2>
          </div>
          
          <div className={styles.articlesList}>
            <article className={styles.articleCard}>
              <h3>Attaque DDoS : une cyber attaque à hauteur de 7,3 Tbps arrêtée !</h3>
              <p>Une cyberattaque DDoS massive a été déjouée. Découvrez l'ampleur de cette menace et les défis rencontrés pour la stopper.</p>
              <a href="https://www.zataz.com/attaque-ddos-une-cyber-attaque-a-hauteur-de-73-tbps-arretee/" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 19 Juin 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Comment sécuriser le helpdesk face aux attaques d'ingénierie sociale ?</h3>
              <p>Les services d'assistance sont des cibles clés. Apprenez comment protéger votre helpdesk des manipulations via l'ingénierie sociale.</p>
              <a href="https://www.it-connect.fr/comment-securiser-le-helpdesk-face-aux-attaques-dingenierie-sociale/" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 19 Juin 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Vulnérabilité dans Roundcube CERTFR-2025-ALE-008</h3>
              <p>Une faille critique a été identifiée dans Roundcube. Le CERT-FR détaille la vulnérabilité et les mesures urgentes à prendre.</p>
              <a href="https://www.cert.ssi.gouv.fr/alerte/CERTFR-2025-ALE-008/" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 05 Juin 2025</span>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
