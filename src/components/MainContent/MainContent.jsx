import React from 'react';
import CardItem from '../../containers/CardItem/CardItem';

import styles from './MainContent.module.scss';

const MainContent = ({ cardsList }) => {
  return (
    <div className={styles.mainContent}>
      <ul className={styles.cardList}>
        {cardsList.map((cardData) => (
          <li key={cardData.id} className={styles.cardItem}>
            <CardItem cardData={cardData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
