import React from 'react';

import styles from './CountryItem.module.css';

function CountryItem(props) {
  return (
    <li className={styles['country-item']}>
      <div className={styles['test-two']}>
        <img
          src={props.country.flags && props.country.flags.png}
          alt={props.country.name.common + 'flag'}
        />
      </div>

      <div className={styles['country-texts']}>
        <p className={styles['country-name']}>{props.country.name.common}</p>
        <p className={styles['country-info']}>
          Population: <span>{props.country.population.toLocaleString()}</span>
        </p>
        <p className={styles['country-info']}>
          Region: <span>{props.country.region}</span>
        </p>
        <p className={styles['country-info']}>
          Capital: <span>{props.country.capital}</span>
        </p>
      </div>
    </li>
  );
}

export default CountryItem;
