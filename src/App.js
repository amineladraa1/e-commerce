import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import theme from "./ui/Theme";
import LandinPage from "./components/landingPage/LandinPage";
import Services from "./components/services/Services";
import CustomSoftware from "./components/customSoftware/CustomSoftware";

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
          <Route
            path="/"
            exact
            render={(props) => (
              <LandinPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path="/revolution" component={() => <div> revolution </div>} />
          <Route path="/about" component={() => <div> about </div>} />
          <Route path="/contact" component={() => <div> contact </div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
