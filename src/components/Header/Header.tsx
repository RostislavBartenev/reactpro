import * as React from 'react';

import style from './Header.module.scss';
import logo from '../../img/Logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Pokemon" className="logo" />
      <ul className={style.menu}>
        <li>Home</li>
        <li>Pokédex</li>
        <li>Legendaries</li>
        <li>Documentation</li>
      </ul>
    </header>
  );
};

export default Header;
