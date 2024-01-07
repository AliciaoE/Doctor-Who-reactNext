// ContactForm.js
import React, { useState } from 'react';
import styles from '../styles/contactoForm.module.css';

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);


    alert('Su mensaje ha sido enviado correctamente');


    setFormData(initialState);
  };

  return (
    <div className={styles.ContactFormContainer}>
      <form className={styles.ContactForm} onSubmit={handleSubmit}>

        <label>
          <input className={styles.respuestaForm} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre*" />
        </label>
        <br />
        <label>
          <input className={styles.respuestaForm} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" />
        </label>
        <br />
        <label>

          <label>
            <textarea
              className={styles.mensajeForm} name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje*" />
          </label>
        </label>
        <br />
        <button className={styles.botonForm} type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
