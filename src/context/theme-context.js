import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', 'light-theme');
    return 'light-theme';
  } else {
    return theme;
  }
};

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
