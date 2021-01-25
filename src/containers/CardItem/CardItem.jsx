import React from 'react';

import styles from './CardItem.module.scss';

import img from '../../assets/images/al.png';

const CardItem = ({ cardData }) => {
  const { name, city, category, price } = cardData;
  return (
    <div className={styles.cardItem}>
      <div className={styles.imgWrap}>
        <figure>
          <img src={img} alt='alphabet' />
        </figure>
        <div className={styles.city}>{city}</div>
        <div className={styles.mask} />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>{name}</div>
        <div className={styles.footer}>
          <div className={styles.category}>{category}</div>
          <div className={styles.price}>$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
