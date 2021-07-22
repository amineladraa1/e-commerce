export const fetchProducts = () => async (dispatch) => {
  const { data } = await api.get("/products?limit=5");
  dispatch({ type: "FETCH_PRODUCTS", payload: data });
};
