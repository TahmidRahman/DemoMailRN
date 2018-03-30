export default (state = 0,action) => {
  switch (action.type) {
    case 'select_category':
        return action.payload;
    default:
        return state;
  }
};
