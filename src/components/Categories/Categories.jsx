import React from 'react';
import { categoryList } from './categoryList';
import CheckBox from '../../containers/CheckBox/CheckBox';

import styles from './Categories.module.scss';

const Categories = ({ categoriesList, handleCategoriesList }) => {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>Categories</div>

      {categoryList.map((category) => (
        <CheckBox
          key={category.id}
          category={category}
          categoriesList={categoriesList}
          handleCategoriesList={handleCategoriesList}
        />
      ))}
    </div>
  );
};

export default Categories;
