"use client";

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className={styles.aboutContainer}>
        <h1 className={styles.title}>À Propos de Moi</h1>
        <p className={styles.description}>
          Je suis étudiant en deuxième année BTS SIO (services informatiques aux organisations) à l'EFREI. Je souhaite postuler pour une alternance dans le domaine informatique pour mon bachelor Développeur Web & Application. Je suis disponible à partir de septembre 2025.
        </p>

        <h2 className={styles.title}>Langues, Vacances et Informations Personnelles</h2>
        <div className={styles.flexContainer}>
          <div className={`${styles.bubble} ${styles.small}`}>
            <h3 className={styles.subTitle}>Langues</h3>
            <ul className={styles.description}>
              <li>Français</li>
              <li>Arabe</li>
              <li>Anglais</li>
              <li>Espagnol</li>
              <li>Italien</li>
            </ul>
          </div>

          <div className={`${styles.bubble} ${styles.small}`}>
            <h3 className={styles.subTitle}>Vacances d'été</h3>
            <ul className={styles.description}>
              <li>Belgique</li>
              <li>Italie</li>
              <li>Espagne</li>
              <li>Pays-Bas</li>
              <li>Maroc</li>
              <li>Allemagne</li>
            </ul>
          </div>

          <div className={`${styles.bubble} ${styles.small}`}>
            <h3 className={styles.subTitle}>Informations Personnelles</h3>
            <p className={styles.description}>
              <strong>Email :</strong> bachar.alaoui03@gmail.com<br />
              <strong>Adresse :</strong> Arcueil (94110)<br />
              <strong>Date de naissance :</strong> 03/11/2005<br />
              <strong>Téléphone :</strong> 06 07 12 20 22<br />
              <strong>Localisation :</strong> Île-de-France
            </p>
          </div>
        </div>

        <h2 className={styles.title}>Compétences Techniques</h2>
        <div className={styles.flexContainer}>
          <div className={`${styles.bubble} ${styles.large}`}>
            <h3 className={styles.subTitle}>Compétences Techniques</h3>
            <ul className={styles.description}>
              <li>Connaissance de base des environnements réseau</li>
              <li>Outils bureautiques et environnement Windows</li>
              <li>Gestion des utilisateurs et des permissions</li>
              <li>Installation et configuration de réseaux</li>
              <li>Développeur site web en React Next.js</li>
              <li>Montage/démontage d'un PC</li>
              <li>Concentré, Autonome, Ambitieux, Organisé</li>
            </ul>
          </div>
        </div>

        <h2 className={styles.title}>Expériences Professionnelles et Diplômes</h2>
        <div className={styles.flexContainer}>
          <div className={styles.bubble}>
            <p className={styles.description}>
              Aide au développement du site web de l'entreprise depuis novembre 2023 chez Velyvelo Arcueil. Gestion de facturation avec Evoliz, aide aux clients, gestion des flottes de vélos, des réparations et du stockage. Stage en Irlande chez PC Maestro de janvier 2023 à février 2023.
            </p>
            <p className={styles.description}>
              BTS SIO SLAM depuis septembre 2023 à l'EFREI. Baccalauréat professionnel Système Numériques option RISC depuis septembre 2020 au Lycée polyvalent de Cachan. Brevet des collèges de septembre 2019 à juillet 2020 au Collège Dulcie September.
            </p>
          </div>
        </div>

        <p className={styles.description}>
          <Link href="https://efrei365net-my.sharepoint.com/:b:/g/personal/bachar_alaoui-medaghri_efrei_net/EZp3ncdjaKJLmen0HooR3tsBD2ao0P2hlPhKnmDAARrglw?e=DdmhqE" className={styles.link}>Télécharger mon CV</Link>
        </p>

        <h2 className={styles.title}>Ma Motivation</h2>
        <div className={styles.flexContainer}>
          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Mon Objectif</h3>
            <p className={styles.description}>
              Je me permets de vous transmettre ma motivation pour une alternance dans le domaine de l'informatique. Je suis actuellement en train de préparer mon BTS en SIO et je cherche une alternance pour septembre 2025.
            </p>
          </div>

          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Passion pour l'Informatique</h3>
            <p className={styles.description}>
              Je suis passionné par l'informatique, particulièrement par le réseau et la programmation. Mon intégration au sein d'une équipe informatique sera une opportunité unique pour approfondir mes connaissances.
            </p>
          </div>

          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Engagement et Adaptabilité</h3>
            <p className={styles.description}>
              Je suis convaincu que l'informatique nécessite une grande adaptabilité et une solide compréhension des dernières technologies. Je suis déterminé à acquérir les compétences nécessaires pour contribuer à l'innovation.
            </p>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Collaboration et Innovation</h3>
            <p className={styles.description}>
              Je suis impatient de travailler en étroite collaboration avec les équipes pour concevoir des solutions informatiques efficaces.
            </p>
          </div>

          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Intérêt pour la Cybersécurité</h3>
            <p className={styles.description}>
              Je suis particulièrement intéressé par la cybersécurité, car elle est essentielle pour protéger les systèmes d'information.
            </p>
          </div>

          <div className={styles.bubble}>
            <h3 className={styles.motivationTitle}>Conclusion</h3>
            <p className={styles.description}>
              Je vous remercie pour l'attention portée à ma candidature et pour l'opportunité de contribuer à votre équipe.
            </p>
          </div>
        </div>

        <p className={styles.description}>
          <Link href="https://efrei365net-my.sharepoint.com/:b:/g/personal/bachar_alaoui-medaghri_efrei_net/EZptPFdaFSlMi4t5MyuKcbcBKI0yt18Q4I1xrau9pJdbxw?e=4dpMbO" className={styles.link}>Télécharger ma lettre de motivation</Link>
        </p>

      </section>
      <Footer />
    </div>
  );
} 