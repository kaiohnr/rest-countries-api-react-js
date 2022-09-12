import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import CountryItem from './CountryItem';
import styles from './Countries.module.css';
import SearchCountry from './SearchCountry';
import { ClipLoader } from 'react-spinners';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [enteredInputCountry, setEnteredInputCoutry] = useState('');
  const [enteredRegion, setEnteredRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      setIsLoading(true);
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    };

    getCountries();
  }, []);

  const searchCountryHandler = (enteredCountry) => {
    setEnteredInputCoutry(enteredCountry);

    // console.log(
    //   countries.filter((country) =>
    //     country.name.common.toLowerCase().includes(enteredCountry)
    //   )
    // );
  };

  const selectRegionHandler = (enteredRegion) => {
    setEnteredRegion(enteredRegion);
  };

  return (
    <div>
      <SearchCountry
        onSearchCountry={searchCountryHandler}
        onSelectCountry={selectRegionHandler}
      />
      <div>
        <ul className={styles['country-list']}>
          {isLoading && <ClipLoader />}
          {countries
            .filter(
              (country) =>
                country.name.common
                  .toLowerCase()
                  .includes(enteredInputCountry) &&
                country.region.includes(enteredRegion)
            )
            .map((country) => (
              <Link
                style={{ boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)' }}
                to={`/${country.name.common}`}
                key={uuidv4()}
              >
                <CountryItem country={country} />
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Countries;
