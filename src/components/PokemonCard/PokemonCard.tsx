import React from 'react';
import Heading from '../Heading/Heading';

import style from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  attack: string | number;
  defense: string | number;
  types: [];
  image: string;
}

const PokemonCard: IPokemonCardProps = ({ name, attack, defense, types, image }) => {
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading classNames={style.titleName} tag="h3">
          {name}
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>{attack}</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          <span className={style.label}>{types}</span>
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
