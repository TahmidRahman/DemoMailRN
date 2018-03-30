export const selectCategory = (categoryId) => {
  return {
    type: 'select_category',
    payload: categoryId
  };
};
