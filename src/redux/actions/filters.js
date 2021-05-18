export const setSortBy = ({ type, order }) => ({
   type: 'SET_STORE_BY',
   payload: { type, order },
});

export const setCategory = (catIndex) => ({
   type: 'SET_CATEGORY',
   payload: catIndex,
});