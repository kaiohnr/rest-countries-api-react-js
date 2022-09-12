import React, { useState } from 'react';
import styles from './SearchCountry.module.css';

function SearchCountry(props) {
  const enteredCountryHandler = (event) => {
    props.onSearchCountry(event.target.value);
  };

  const selectRegionHandler = (event) => {
    props.onSelectCountry(event.target.value);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles['input-container']}>
          <input
            type="text"
            placeholder="Search for a country..."
            className={styles['search-input']}
            onChange={enteredCountryHandler}
          />
        </div>

        <div className={styles['select-container']}>
          <select
            className={styles['search-select']}
            onChange={selectRegionHandler}
          >
            <option value="">All regions</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchCountry;
