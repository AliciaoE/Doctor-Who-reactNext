// components/DoctorList.js
import React from 'react';

const DoctorList = ({ doctorsData }) => {

  const doctors = Array.isArray(doctorsData.doctors) ? doctorsData.doctors : [];

  const handleVerMas = (doctor) => {

    window.location.href = 'https://www.doctorwho.tv/';
  };

  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>
          <img src={doctor.image} alt={`Imagen de ${doctor.doctor}`} />
          <h3>{doctor.doctor}</h3>
          <p>{doctor.actor}</p>
          <button onClick={() => handleVerMas(doctor)}>Ver más</button>
        </li>
      ))}
    </ul>
  );
};

export default DoctorList;
