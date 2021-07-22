export default (state = [], action) => {
  switch (action.type) {
    case "FTECH_PRODUCTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
