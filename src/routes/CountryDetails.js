import React, { useEffect, useState } from 'react';

import styles from './CountryDetails.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ClipLoader } from 'react-spinners';

function CountryDetails() {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCountryInfo = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      setCountryInfo(data[0]);
      setIsLoading(false);
    };

    getCountryInfo();
  }, [countryName]);

  return (
    <div>

      <div className={styles['country-details']}>
        <div className={styles['back-btn']}>
          <Link to={'/'}>
            <span className={styles.back}>
              <BiArrowBack /> Back
            </span>
          </Link>
        </div>

        {isLoading && <ClipLoader />}

    <div className={styles['all-info__containeer']}>

        <div className={styles['image-container']}>

          <div className={styles['country-image']}>
            <img
              src={countryInfo.flags && countryInfo.flags.svg}
              alt={countryInfo.name && countryInfo.name.common}
            />
          </div>

        </div>

         <div className={styles['country-info__container']}>

          <div className={styles['country-name']}>
            <p className={styles['country-info__text']}>
              {countryInfo.name && countryInfo.name.common}
            </p>
          </div>

          <div className={styles['country-info__one']}>
            <p className={styles['country-info__text']}>
              Native Name:{' '}
              <span>{countryInfo.name && countryInfo.name.common}</span>
            </p>
            <p className={styles['country-info__text']}>
              Population:
              <span>
                {' '}
                {countryInfo.population &&
                  countryInfo.population.toLocaleString()}
              </span>
            </p>
            <p className={styles['country-info__text']}>
              Region: <span>{countryInfo.region}</span>
            </p>
            <p className={styles['country-info__text']}>
              Sub Region: <span>{countryInfo.subregion}</span>
            </p>
            <p className={styles['country-info__text']}>
              Capital:{' '}
              <span>
                {countryInfo.capital &&
                  countryInfo.capital.map((cap) => cap).join(', ')}
              </span>
            </p>
          </div>
          
        </div>

        <div className={styles['country-info__container__two']}>

          <div className={styles['country-info__two']}>
            <p className={styles['country-info__text']}>
              Currencies:{' '}
              <span>
                {countryInfo.currencies && Object.keys(countryInfo.currencies)}
              </span>
            </p>
            <p className={styles['country-info__text']}>
              Languages:{' '}
              <span>
                {countryInfo.languages &&
                  Object.values(countryInfo.languages).join(', ')}
              </span>
            </p>
          </div>
        </div>

        <div className={styles['borders-countries__container']}>
          
          <div className={styles['country-borders']}>
            <p className={styles['country-info__text']}>Border Countries:</p>
          </div>

          <div className={styles['borders-container']}>
            <ul className={styles['borders-list']}>
              {countryInfo.borders &&
                countryInfo.borders.map((border) => (
                  <li className={styles['border-link']} key={uuidv4()}>
                    {border}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
