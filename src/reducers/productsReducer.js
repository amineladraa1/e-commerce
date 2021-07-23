export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return [...state, ...action.payload];
    case "FETCH_ONEPRODUCT":
      return [...state, ...action.payload];
    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
};
