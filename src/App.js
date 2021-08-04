import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import theme from "./ui/Theme";
import LandinPage from "./components/landingPage/LandinPage";
import Services from "./components/services/Services";
import CustomSoftware from "./components/customSoftware/CustomSoftware";
import MobileDevelopement from "./components/MobileDevelopement/MobileDevelopement";
import Websites from "./components/websites/Websites";
import Revolution from "./components/revolution/Revolution";
import About from "./components/about-us/AboutUs";
import Contact from "./components/contact-us/Contact";
import Estimate from "./components/estimate/Estimate";

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
          <Route
            path="/mobileapps"
            render={(props) => (
              <MobileDevelopement
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/websites"
            render={(props) => (
              <Websites
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/revolution"
            render={(props) => (
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/estimate"
            render={(props) => (
              <Estimate
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
