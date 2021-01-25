import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CityList from '../../containers/CityList/CityList';
import Categories from '../Categories/Categories';
import PriceRange from '../../containers/PriceRange/PriceRange';

import styles from './SideBar.module.scss';

const SideBar = ({ cardsList }) => {
  const history = useHistory();
  const { search } = useLocation();

  let filterData = {};
  const searchParams = new URLSearchParams(search);
  for (let p of searchParams) {
    filterData = {
      ...filterData,
      ...Object.fromEntries([p]),
    };
  }

  const checkedListDefault = filterData.categories
    ? filterData.categories.split(',')
    : [];

  const pricesList = cardsList.map((card) => card.price);
  const maxPrice = Math.max(...pricesList);
  const minPrice = Math.min(...pricesList);

  const [city, setCity] = useState(filterData.city ?? '');
  const [checkedList, handleCheckedList] = useState(checkedListDefault);
  const [priceRange, handlePriceRange] = useState([
    filterData.priceFrom ?? minPrice,
    filterData.priceTo ?? maxPrice,
  ]);

  const submit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    const categories = checkedList.length
      ? checkedList.reduce((acc, nextValue) => `${acc}${',' + nextValue}`)
      : null;
    const priceFrom = priceRange[0];
    const priceTo = priceRange[1];
    const queryData = { city, categories, priceFrom, priceTo };

    for (let key in queryData) {
      if (queryData[key]) {
        params.append(key, queryData[key]);
      }
    }
    history.push({ search: params.toString() });
  };

  return (
    <div className={styles.sideBar}>
      <form className={styles.filterForm} onSubmit={submit}>
        <CityList city={city} setCity={setCity} />
        <Categories
          checkedList={checkedList}
          handleCheckedList={handleCheckedList}
        />
        <PriceRange
          handlePriceRange={handlePriceRange}
          maxPrice={maxPrice}
          minPrice={minPrice}
          filterData={filterData}
        />
        <div className={styles.formFooter}>
          <div className={styles.priceWrap}>
            <div className={styles.price}>$ {priceRange[0]}</div>
            <span className={styles.dash}>-</span>
            <div className={styles.price}>$ {priceRange[1]}</div>
          </div>
          <button className={styles.submitBtn} type='submit'>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
