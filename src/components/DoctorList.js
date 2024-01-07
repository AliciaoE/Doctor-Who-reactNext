// components/DoctorList.js
import React from 'react';
import styles from '../styles/doctor-list.module.css';


const DoctorList = ({ doctorsData }) => {
  const doctors = Array.isArray(doctorsData.doctors) ? doctorsData.doctors : [];

  const handleVerMas = (doctor) => {
    // Redirigir al usuario al enlace proporcionado al hacer clic en "Ver más"
    window.location.href = 'https://www.doctorwho.tv/';
  };

  

  return (
    
    <div className={styles['doctor-list-container']}>
   
      {doctors.map((doctor) => (
    
        <div key={doctor.id} className={styles['doctor-card']}>
       
          <img
            src={doctor.image}
            alt={`Imagen de ${doctor.doctor}`}
            className={styles['doctor-image']}
          />
          <div className={styles['text-container']}>
          <h3>{doctor.doctor}</h3>
          <p>{doctor.actor}</p>
         <p> {doctor.screen_time} </p>
          </div>
          <button className={styles.botonMas} onClick={() => handleVerMas(doctor)}> Ver más</button>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
