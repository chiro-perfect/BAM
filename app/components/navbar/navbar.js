"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaHome, FaCode, FaBriefcase, FaLaptopCode, FaGraduationCap, FaRss } from "react-icons/fa";
import styles from '../../page.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { path: '/', label: 'Accueil', icon: FaHome },
    { path: '/skills', label: 'Compétences', icon: FaCode },
    { path: '/experience', label: 'Expérience', icon: FaBriefcase },
    { path: '/projects', label: 'Projet', icon: FaLaptopCode },
    { path: '/bts-sio', label: 'BTS SIO', icon: FaGraduationCap },
    { path: '/veille', label: 'Veille Techno', icon: FaRss },
  ];

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      };

      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.navbarHidden : ''}`}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={styles.navLink}>
          <Image 
            src="/favicon.ico"
            alt="Logo"
            width={180}
            height={170}
            className={styles.navLogo}
            priority
          />
        </Link>
      </div>
      <ul className={styles.navbarNav}>
        {navItems.map(({ path, label, icon: Icon }) => (
          <li key={path} className={styles.navItem}>
            <Link
              href={path}
              className={`${styles.navLink} ${pathname === path ? styles.active : ''}`}
            >
              <span className={styles.navIcon}>
                <Icon />
              </span>
              <span className={styles.navText}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 