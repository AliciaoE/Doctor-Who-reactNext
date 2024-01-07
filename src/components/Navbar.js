// Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import styles from '../styles/navbar.module.css';

const Navbar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.cabeceraNav}>
      <section className={styles.menuIzquierda}>
        <Link href='/'>
          <img className={styles.logoMob} src='/images/logos/logo.png' alt='Logo' />
        </Link>
        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}> ☰ </div>

      </section>
      <div className={styles.Ordenador}>
        <ul className={`${styles.menuDerecha}  ${isMobileMenuOpen ? styles.showOnMobile : ''}`}>
          <li> <Link href='/conoce-a/conoce-a'> <p className={styles.myParagraph}>Conoce a</p> </Link> </li>
          <li> <Link href='/doctores/doctores'> <p className={styles.myParagraph}>Doctores</p> </Link> </li>
          <li> <Link href='/contacto/contacto'> <p className={styles.myParagraph}>Contacto</p> </Link> </li>
          <li className={styles.logoAndSearchBar}>
  <Link href='/'>
    <img className={styles.logo} src='/images/logos/logo.png' alt='Logo' />
  </Link>
  <SearchBar className={styles.miSearchBar} onSearch={onSearch} placeholder="Buscar" />
</li>

         

        <ul className={styles.social}>
          <li><img src="/images/icons/facebook.svg" alt="Facebook"></img> </li>
          <li><img src="/images/icons/simple-icons_x.svg" alt="Twitter"></img> </li>
          <li><img src="/images/icons/mdi_instagram.svg" alt="Instagram"></img> </li>
          <li> <img src="/images/icons/ic_baseline-tiktok.svg" alt="TikTok"></img> </li>
        </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
