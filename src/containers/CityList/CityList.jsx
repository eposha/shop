import React, { useState } from 'react';
import AutoClose from '../../utils/AutoClose';
import { arrowSelect } from '../../assets/svgIcons';

import styles from './CityList.module.scss';

const CityList = ({ city, setCity, cityItemList }) => {
  const [isOpenList, toggleOpenList] = useState(false);
  const [inputValue, setInputValue] = useState(city);

  const onChange = (e) => {
    setInputValue(e.target.value);
    if (!inputValue) {
      toggleOpenList(true);
    }
  };

  const setCityData = (city) => {
    setCity(city);
    setInputValue(city);
    toggleOpenList(false);
  };

  return (
    <div className={styles.cityList}>
      <div className={styles.title}>City</div>
      <div className={styles.inputWrap}>
        <input
          className={styles.inputField}
          value={inputValue.name ?? ''}
          onChange={onChange}
          onClick={() => toggleOpenList(true)}
          placeholder={'Select...'}
        />
        <div className={styles.arrowSelect}>{arrowSelect}</div>
        {isOpenList && (
          <AutoClose
            handleClose={toggleOpenList}
            additionalFunction={() => setInputValue(city)}
            render={() => (
              <ul className={styles.cityListData}>
                {cityItemList.map((cityItem) => (
                  <li
                    key={cityItem.id}
                    className={styles.cityItem}
                    onClick={() => setCityData(cityItem)}>
                    {cityItem.name}
                  </li>
                ))}
              </ul>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default CityList;
