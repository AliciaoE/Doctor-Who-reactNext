import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import FooterWh from '../components/FooterWh';
import styles from '../styles/global.css';

const Layout = ({ children }) => {
  const router = useRouter();

  const handleSearch = (searchTerm) => {

    const searchUrl = `/busqueda/busqueda?searchTerm=${encodeURIComponent(searchTerm)}`;
    router.push(searchUrl);
  };

  return (
    <div className={styles.layoutContainer}>
      <Navbar onSearch={handleSearch} />

      <div className={styles.contentContainer}>
        {children}
      </div>
      <hr></hr>
      <FooterWh />
    </div>
  );
};

export default Layout;
