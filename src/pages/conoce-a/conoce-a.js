// pages/conoce-a.js
import Layout from '../../app/Layout';
import React from 'react';
import styles from './conoce-a.module.css';

const ConoceAPage = () => {
  return (
    <Layout>
      <div className={styles.conoceA}>
        <section className={styles.textConocea}>
          <h1 className={styles.tituloConoce}>Conoce a ... decimotercera<br></br> doctor</h1>
          <h2 className={styles.parrafoConoce}>
          Lorem ipsum dolor sit amet consectetur. Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.
          </h2>
        </section>

        <img className={styles.imgConoce} src='/images/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'></img>
        <img className={`${styles.resistenciaConoce} ${styles.overlay}`} src='/images/symbols/resistencia.png'></img>
        </div> 
      <img className={styles.persistenciaConoce} src='/images/symbols/persistencia.png'></img>

    </Layout>
  );
};

export default ConoceAPage;
