import React from 'react';

import cn from 'classnames';

import style from './PokemonCard.module.scss';

import notFound from './assets/img/HddtBOT.png';

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
            // @ts-ignore
            <span key={type} className={cn(style.label, style[type])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(
          // @ts-ignore
          style.pictureWrap,
          style[types[0]],
        )}>
        <img src={image || notFound} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
