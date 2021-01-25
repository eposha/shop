export const filterByCity = (city, cardsList) =>
  cardsList.filter((card) => +card.city === +city.id);

export const filterByCategories = (categoriesList, cardsList) =>
  cardsList.filter((card) => categoriesList.includes(card.category));

export const filterByPriceRange = (priceRange, cardsList) => {
  const [minPrice, maxPrice] = priceRange;
  return cardsList.filter((card) => {
    if (minPrice <= card.price && card.price <= maxPrice) {
      return true;
    } else {
      return false;
    }
  });
};

export const filteredData = (
  filterData,
  city,
  categoriesList,
  priceRange,
  cardsList
) => {
  let filteredCards = [...cardsList];

  if (city) {
    filteredCards = filterByCity(city, filteredCards);
  }
  if (categoriesList.length) {
    filteredCards = filterByCategories(categoriesList, filteredCards);
  }
  if (filterData.priceFrom || filterData.priceTo) {
    filteredCards = filterByPriceRange(priceRange, filteredCards);
  }
  return filteredCards;
};
