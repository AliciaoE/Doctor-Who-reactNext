
import React from 'react';
import DoctorList from '../../components/DoctorList';
import Layout from '../../app/Layout';
import styles from './doctores.module.css'; 

const doctorsData = require('/public/data/doctors.json');

const DoctoresPage = () => {
  return (
    <Layout>
      <h1 className={styles.tituloDoctores}>Doctores</h1>
      <DoctorList doctorsData={doctorsData} />
    </Layout>
  );
};

export default DoctoresPage;

