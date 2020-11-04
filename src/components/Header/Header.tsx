import * as React from 'react';

import style from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface iMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: iMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <a key={id} href={link} className={style.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
