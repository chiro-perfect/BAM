"use client";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './about.module.css';

export default function Accueil() {
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
    {/*{loading && <Loader />}*/}    
      <Navbar />
      <section id="about" className="welcome-section">
        <h2>À Propos de Moi</h2>
        <p>Je suis étudiant en seconde année BTS SIO à l'EFREI, passionné par l'informatique, le réseau et la programmation. Je suis motivé pour devenir ingénieur informatique et je suis convaincu qu'être dans votre entreprise, sera un pas important vers la réalisation de cet objectif.</p>
        <p>
          <Link href="/about" className={styles.link}>Bachar Alaoui Medaghri</Link>
        </p>
      </section>
      <Footer />
    </div>
  );
} 