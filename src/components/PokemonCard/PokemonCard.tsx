import React from 'react';

import style from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  attack: string | number;
  defense: string | number;
  types: string[];
  image: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defense, types, image }) => {
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <h3 className={style.titleName}>{name}</h3>
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
          {types.map((type) => (
            <span key={type} className={style.label} style={{ background: '#f28f16' }}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={style.pictureWrap} style={{ background: 'linear-gradient(270deg, #b33327 0.15%, #d93e30 100%)' }}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
