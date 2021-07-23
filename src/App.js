import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./actions";
import { useEffect } from "react";
import Body from "./components/Body/Body";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
