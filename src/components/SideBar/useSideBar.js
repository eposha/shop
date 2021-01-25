import { useLocation } from 'react-router-dom';

export const useSideBar = (cardsList, cityItemList) => {
  const { search } = useLocation();
  let filterData = {};
  const searchParams = new URLSearchParams(search);
  for (let p of searchParams) {
    filterData = {
      ...filterData,
      ...Object.fromEntries([p]),
    };
  }

  const categoriesListDefault = filterData.categories
    ? filterData.categories.split(',').map(Number)
    : [];

  const pricesList = cardsList.map((card) => card.price);
  const maxPrice = Math.max(...pricesList);
  const minPrice = Math.min(...pricesList);

  const defaultCity = filterData.city
    ? cityItemList.find((cityData) => +cityData.id === +filterData.city)
    : '';

  return {
    filterData,
    categoriesListDefault,
    maxPrice,
    minPrice,
    defaultCity,
  };
};
