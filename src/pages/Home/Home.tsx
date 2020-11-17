import React from 'react';

import { navigate } from 'hookrouter';
import style from './Home.module.scss';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Parallax from '../../components/Parallax/Parallax';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
