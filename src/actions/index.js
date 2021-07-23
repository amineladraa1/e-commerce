import api from "../Api";

export const login = (FormData) => async (dispatch) => {
  const { data } = await api.post("/auth/login", FormData);
  console.log(data);
};

//////////////////////////

export const fetchProducts = () => async (dispatch) => {
  const { data } = await api.get("/products?limit=5");
  dispatch({ type: "FETCH_PRODUCTS", payload: data });
};

export const fetchOneProduct = (id) => async (dispatch) => {
  const { data } = await api.get(`/products/${id}`);
  dispatch({ type: "FETCH_ONEPRODUCT", payload: data });
};

export const updateProduct = (id, product) => async (dispatch) => {
  const { data } = await api.patch(`/products/${id}`, product);
  dispatch({ type: "UPDATE_PRODUCT", payload: data });
};

export const deleteProduct = (id) => async (dispatch) => {
  const { data } = await api.delete(`/products/${id}`);
  dispatch({ type: "DELETE_PRODUCT", payload: data });
};
