import { createSelector } from 'reselect';
import _ from 'lodash';

const productsSelector = state => state.products.items;
const selectedCategories = state => state.products.selectedCategory;

export const selectCategories = createSelector(
  productsSelector,
  items => _.uniq(items.map(val => val.category)).sort((a, b) => a > b),
);

export const getItemByFilter = createSelector(
  productsSelector,
  selectedCategories,
  (items, categories) => (categories.length ?
    items.filter(item => categories.some(category => category === item.category)) : items),
);
