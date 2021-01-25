import React from 'react';
import CardItem from '../../containers/CardItem/CardItem';

import styles from './MainContent.module.scss';

const MainContent = ({ cardsList }) => {
  return (
    <div className={styles.mainContent}>
      {cardsList.length ? (
        <ul className={styles.cardList}>
          {cardsList.map((cardData) => (
            <li key={cardData.id} className={styles.cardItem}>
              <CardItem cardData={cardData} />
            </li>
          ))}
        </ul>
      ) : (
        <span className={styles.notFound}>This products not found</span>
      )}
    </div>
  );
};

export default MainContent;
