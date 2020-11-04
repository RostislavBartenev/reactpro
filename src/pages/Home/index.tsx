import React from 'react';

import style from './Home.module.scss';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Header />
    </div>
  );
};

export default HomePage;
