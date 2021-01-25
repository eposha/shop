import React from 'react';
import { categoryList } from './categoryList';
import CheckBox from '../../containers/CheckBox/CheckBox';

import styles from './Categories.module.scss';

const Categories = ({ checkedList, handleCheckedList }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>Categories</div>

      {categoryList.map((category) => (
        <CheckBox
          key={category.id}
          category={category}
          checkedList={checkedList}
          handleCheckedList={handleCheckedList}
        />
      ))}
    </div>
  );
};

export default Categories;
