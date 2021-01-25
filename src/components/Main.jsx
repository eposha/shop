import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
import { data } from './data';
import styles from './Main.module.scss';

const Main = () => {
  const [cardsList, setCardsList] = useState(data);

  return (
    <div className={styles.main}>
      <div className={styles.sideBarWrap}>
        <SideBar cardsList={data} setCardsList={setCardsList} />
      </div>
      <div className={styles.mainContentWrap}>
        <MainContent cardsList={cardsList} />
      </div>
    </div>
  );
};

export default Main;
