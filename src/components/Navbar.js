import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const path = location.pathname;
    setActivePage(path === '/' ? 'Accueil' : path.replace('/', ''));
  }, [location]);

  return (
    <nav>
      <NavLink to="/" className={activePage === 'Accueil' ? 'active' : ''}>Accueil</NavLink>
      <NavLink to="/A_Propos" className={activePage === 'A_Propos' ? 'active' : ''}>A Propos</NavLink>
    </nav>
  );
};