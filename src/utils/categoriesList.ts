import { BookInterface } from '../../types';

export const categoriesList = (categories: BookInterface[]) => {
  const categoriesNames = [
    ...new Set(categories?.map((item: BookInterface) => item.category.title)),
  ];
  categoriesNames.unshift('All');
  return categoriesNames;
};
