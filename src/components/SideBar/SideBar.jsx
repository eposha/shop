import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { filteredData } from './filters';
import { cityItemList } from './cityItemList';
import { useSideBar } from './useSideBar';
import CityList from '../../containers/CityList/CityList';
import Categories from '../Categories/Categories';
import PriceRange from '../../containers/PriceRange/PriceRange';

import styles from './SideBar.module.scss';

const SideBar = ({ cardsList, setCardsList }) => {
  const history = useHistory();
  const { search } = useLocation();

  const {
    filterData,
    categoriesListDefault,
    maxPrice,
    minPrice,
    defaultCity,
  } = useSideBar(cardsList, cityItemList);

  const [city, setCity] = useState(defaultCity);
  const [categoriesList, handleCategoriesList] = useState(
    categoriesListDefault
  );
  const [priceRange, handlePriceRange] = useState([
    filterData.priceFrom ?? minPrice,
    filterData.priceTo ?? maxPrice,
  ]);

  useEffect(() => {
    if (Object.keys(filterData).length) {
      const dataWithFilter = filteredData(
        filterData,
        city,
        categoriesList,
        priceRange,
        cardsList
      );
      setCardsList(dataWithFilter);
    }
  }, [search]);

  const submit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    const categories = categoriesList.length
      ? categoriesList.reduce((acc, nextValue) => `${acc}${',' + nextValue}`)
      : null;

    const [priceFrom, priceTo] = priceRange;

    const queryData = { city: city.id, categories, priceFrom, priceTo };

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
        <CityList city={city} setCity={setCity} cityItemList={cityItemList} />
        <Categories
          categoriesList={categoriesList}
          handleCategoriesList={handleCategoriesList}
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
