// pages/contacto.js
import React from 'react';
import ContactForm from '../../components/ContactForm';
import Layout from '../../app/Layout';
import styles from './contacto.module.css';  // Asegúrate de importar styles desde el archivo correcto

const ContactoPage = () => {
  return (
    <Layout>
      <p className={styles.tituloContacto} >Envía tu mensaje al <br></br>Doctor</p>
      <div className={styles.contactoContainer}>
        <div className={styles.imagenesContainer}>
          <img src='../images/svg/persistencia.svg' alt="Persistencia" className={styles.imagenPer} />
          <img src='../images/svg/resistencia.svg' alt="Resistencia" className={styles.imagenResis} />
          <img src='../images/svg/vencer.svg' alt="Vencer" className={styles.imagenVenc} />
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactoPage;
