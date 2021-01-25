import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import styles from './PriceRange.module.scss';

const AirbnbSlider = withStyles({
  root: {
    color: '#1cb8ff',
    height: 4,
    padding: '13px 0',
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid #1cb8ff',
    marginTop: -7,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: '#1cb8ff',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d6d9e1',
    opacity: 1,
    height: 3,
  },
})(Slider);

const PriceRange = ({ handlePriceRange, maxPrice, minPrice, filterData }) => {
  const converedRange = maxPrice / 100;
  const minPriceRange = minPrice / converedRange;

  const minPriceDefault = filterData.priceFrom
    ? filterData.priceFrom / converedRange
    : minPriceRange;
  const maxPriceDefault = filterData.priceTo
    ? filterData.priceTo / converedRange
    : 100;

  const [value, setValue] = useState([minPriceDefault, maxPriceDefault]);

  const handleChange = (event, newValue) => {
    handlePriceRange([
      Math.floor(newValue[0] * converedRange),
      Math.floor(newValue[1] * converedRange),
    ]);

    setValue(newValue);
  };

  return (
    <div className={styles.priceRange}>
      <div className={styles.title}>Price</div>
      <div className={styles.rangeWrap}>
        <AirbnbSlider value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default PriceRange;
