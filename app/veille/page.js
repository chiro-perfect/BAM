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
              <h3>Claude 3.5 : L'IA d'Anthropic surpasse GPT-4</h3>
              <p>Anthropic a lancé Claude 3.5 Sonnet, une version améliorée de son modèle d'IA, surpassant GPT-4 sur une gamme étendue d'évaluations, notamment en raisonnement complexe et en traitement du langage naturel.</p>
              <a href="https://www.anthropic.com/news/claude-3-5-sonnet?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 5 Mai 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Gemini 2.5 : Google renforce son IA multimodale</h3>
              <p>Google a introduit Gemini 2.5, son modèle d'IA multimodale le plus avancé, capable de traiter du texte, du code, des images, de l'audio et de la vidéo. Cette version améliore la compréhension contextuelle et la performance générale.</p>
              <a href="https://deepmind.google/technologies/gemini/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 2 Mai 2025</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Sora : OpenAI lance son générateur vidéo IA au Royaume-Uni</h3>
              <p>OpenAI a déployé Sora, son outil de génération vidéo à partir de texte, au Royaume-Uni, déclenchant des débats sur l'utilisation des contenus protégés par des droits d'auteur.</p>
              <a href="https://www.theguardian.com/technology/2025/feb/28/openai-sora-video-generation-uk-amid-copyright-row?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 28 Février 2025</span>
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
              <p>Le FBI a rapporté que les attaques par ransomware ont causé des pertes record de 1,1 milliard de dollars en 2023, soulignant la nécessité d'une vigilance accrue face à cette menace croissante.</p>
              <a href="https://www.chainalysis.com/blog/ransomware-2024/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 15 Mars 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Le modèle Zero Trust devient incontournable en 2024</h3>
              <p>Le modèle Zero Trust, qui repose sur le principe de "ne jamais faire confiance, toujours vérifier", est devenu essentiel pour sécuriser les infrastructures face à l'évolution des cybermenaces.</p>
              <a href="https://novatech.net/blog/the-rise-of-zero-trust-cybersecurity-in-2024-why-its-essential-for-your-business?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 20 Février 2024</span>
            </article>

            <article className={styles.articleCard}>
              <h3>Les failles critiques dans les API REST : une préoccupation majeure</h3>
              <p>OWASP a mis en lumière les vulnérabilités critiques dans les API REST, soulignant l'importance de sécuriser ces interfaces pour prévenir les risques d'exploitation.</p>
              <a href="https://www.axopen.com/blog/2024/11/owasp-top-10-failles-api/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                Lire l'article original
              </a>
              <span className={styles.date}>Publié le 11 Novembre 2024</span>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
