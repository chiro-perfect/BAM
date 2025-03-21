"use client";

import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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
      setError(true);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="page-container">
    {/*   {loading && <Loader />}
      {error && <Error404 />} */}
      <Navbar />
      <main className="main-content">
        <section id="about" className="welcome-section">
          <h2>À Propos de Moi</h2>
          <p>Je suis étudiant en seconde année en BTS SIO à l'EFREI, passionné par l'informatique, le réseau et la programmation. Je suis motivé pour devenir ingénieur informatique et je suis convaincu qu'être dans votre entreprise, sera un pas important vers la réalisation de cet objectif.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 