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
              <h3>Claude 3 : la nouvelle IA de Anthropic qui rivalise avec GPT-4</h3>
              <p>Anthropic lance Claude 3, une nouvelle famille de modèles d'IA qui surpasse GPT-4 sur de nombreux benchmarks et offre des capacités multimodales avancées.</p>
              <a href="https://www.journaldunet.com/intelligence-artificielle/1528697-anthropic-surprend-avec-claude-3-un-modele-d-ia-plus-puissant-que-gpt-4-et-multimodal/#:~:text=Apr%C3%A8s%20s'%C3%AAtre%20fait%20d%C3%A9passer,'usage%2C%20selon%20les%20benchmarks." target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 5 Mars 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Gemini 1.5 : Google dévoile son nouveau modèle d'IA</h3>
              <p>Google présente Gemini 1.5, capable d'analyser jusqu'à 1 million de tokens, promettant une révolution dans le traitement de longs contenus.</p>
              <a href="https://www.zdnet.fr/actualites/google-presente-son-nouveau-modele-d-ia-gemini-15-39964288.htm" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 15 Février 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Sora : L'IA générative vidéo d'OpenAI</h3>
              <p>OpenAI révolutionne la création vidéo avec Sora, capable de générer des vidéos réalistes à partir de descriptions textuelles.</p>
              <a href="https://www.cscience.ca/sora-dopenai-le-realisme-absolu-sur-le-bout-de-la-langue/?gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYp1DvPDL0NKTZi40idXPK9eZE18of5n4oP3ebbKIAd-xwauHTnr0nkaAkijEALw_wcB" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 16 Février 2024</span>
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
              <h3>Les ransomwares ont causé 1,1 milliard de dollars de pertes en 2023</h3>
              <p>Le FBI révèle que les attaques par rançongiciel ont atteint des niveaux record en 2023, avec des pertes financières considérables.</p>
              <a href="https://www.lemondeinformatique.fr/actualites/lire-un-montant-record-de-1-1-md$-verse-en-rancons-en-2023-92933.html" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 1 Mars 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Le Zero Trust devient incontournable en 2024</h3>
              <p>Comment le modèle Zero Trust s'impose comme la nouvelle norme de sécurité face aux menaces croissantes.</p>
              <a href="https://www.illumio.com/fr/blog/top-cybersecurity-news-stories-from-december-2024#:~:text=Une%20chose%20est%20claire%20%3A%20Zero,cybers%C3%A9curit%C3%A9%20de%20ce%20mois%2Dci." target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 20 Février 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Les failles critiques dans les API REST</h3>
              <p>OWASP publie son nouveau Top 10 des vulnérabilités API, soulignant l'importance croissante de la sécurité des interfaces.</p>
              <a href="https://www.akamai.com/fr/glossary/what-are-api-security-breaches#:~:text=Une%20faille%20de%20s%C3%A9curit%C3%A9%20des%20API%20peut%20entra%C3%AEner%20un%20acc%C3%A8s,contr%C3%B4le%20de%20composants%20du%20syst%C3%A8me.." target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 25 Février 2024</span>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
} 