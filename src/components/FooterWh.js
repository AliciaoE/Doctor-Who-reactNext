import React from 'react';
import styles from '../styles/footerWh.module.css';

const FooterWh = () => {
  return (
    <section className={styles.footerWh}>
      <img className={styles.vencer} src='images/symbols/vencer.png' alt="Group"></img>
      <div className={styles.iconosFooter}>
      <img src="/images/icons/facebook.svg" alt="Facebook"></img>
      <img src="/images/icons/simple-icons_x.svg" alt="Simple Icons"></img>
      <img src="/images/icons/mdi_instagram.svg" alt="Instagram"></img>
      <img src="/images/icons/ic_baseline-tiktok.svg" alt="TikTok"></img>
      </div>
    </section>
  );
};

export default FooterWh;
