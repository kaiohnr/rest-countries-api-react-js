import React, { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import NavBar from './components/NavBar';
import CountryDetails from './routes/CountryDetails';
import { Helmet } from 'react-helmet';
import { ThemeContext } from './context/theme-context';

const App = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.theme}>
      <Helmet>
        <style>{`body { background-color: ${
          themeContext.theme === 'light-theme' ? '#fafafa' : '#202c37'
        } }`}</style>
      </Helmet>
      <NavBar />

      <Routes>
        <Route path="/" element={<Countries />} />

        <Route path="/" element={<CountryDetails />}>
          <Route path=":countryName" element={<CountryDetails />} />
        </Route>
        
      </Routes>
    </div>
    
  );
};

export default App;
