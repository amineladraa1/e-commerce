import { ThemeProvider } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchProducts } from "./actions";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import theme from "./ui/Theme";
import LandinPage from "./components/landingPage/LandinPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandinPage} />
          <Route
            path="/shoppingcart"
            exact
            component={() => <div> shoppingcart </div>}
          />
          <Route
            path="/wishlist"
            exact
            component={() => <div> wishlist </div>}
          />
          <Route path="/login" exact component={() => <div> login </div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
