import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import theme from "./ui/Theme";
import LandinPage from "./components/landingPage/LandinPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
