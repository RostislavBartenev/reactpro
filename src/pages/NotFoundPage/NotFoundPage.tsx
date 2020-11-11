import React from 'react';

import { navigate } from 'hookrouter';

import Button from '../../components/Button/Button';

import style from './NotFoundPage.module.scss';

import TeamRocket from './assets/img/Team_Rocket_trio_OS 1.png';

const NotFoundPage = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.text}>404</div>
        <div className={style.layer}>
          <img src={TeamRocket} alt="TeamRocket" />
          <div className={style.back}>
            <div className={style.subTitle}>
              <span>The rocket team</span> has won this time.
            </div>
            <Button type="third" onClick={() => navigate('/')}>
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
