import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/busqueda/busqueda.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event) => {
    // Verifica si la tecla presionada es "Enter"
    if (event.key === 'Enter') {
      onSearch(query);
    } 
  };

  return (
    <div className={styles.searchBarContainer}>
      <span
        className={styles.searchIcon}
        aria-label="Buscar"
        onClick={handleSearch}
      >
        🔍
      </span>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;