"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../../page.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBubbles}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.bubble}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 20}px`,
              height: `${30 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <Link href="/about" className={styles.footerName}>Bachar ALAOUI MEDAGHRI</Link>
          <div className={styles.footerTitle}>Développeur Web & Technicien Réseau</div>
        </div>
        <div className={styles.footerRight}>
          <Link href="https://github.com/chiro-perfect" className={styles.footerLink}>
            <FaGithub className={styles.footerIcon} />
            <span>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/bachar-alaoui-medaghri-a0790a253/" className={styles.footerLink}>
            <FaLinkedin className={styles.footerIcon} />
            <span>LinkedIn</span>
          </Link>
          <Link href="mailto:bachar.alaoui03@gmail.com" className={styles.footerLink}>
            <FaEnvelope className={styles.footerIcon} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className={styles.footerWave}></div>
    </footer>
  );
} 