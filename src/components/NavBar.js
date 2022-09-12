import React, { useContext } from 'react';
import { BsMoon } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

import styles from './NavBar.module.css';

import { ThemeContext } from '../context/theme-context';

function NavBar() {
  const themeContext = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeContext.toggleTheme();
  };

  return (
    <div className={styles['nav--bar__container']}>
      <div className={styles['nav-bar']}>
        <h1>When in the world?</h1>
        <div className={styles['theme-toggler']}>
          {themeContext.theme === 'light-theme' ? (
            <BsMoon
              className={styles['theme-btn']}
              onClick={toggleThemeHandler}
            />
          ) : (
            <FiSun
              className={styles['theme-btn']}
              onClick={toggleThemeHandler}
            />
          )}

          <p>
            {themeContext.theme === 'light-theme' ? 'Dark Mode' : 'Light Mode'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
