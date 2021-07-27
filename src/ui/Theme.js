import { createTheme } from "@material-ui/core/styles";

const bleu = "#000942";
const yellowGold = "#B99F5F";

export default createTheme({
  palette: {
    primary: {
      main: "#000942",
      // light: "#5F77BA"
    },
    secondary: {
      main: "#B99F5F",
      //  light: "#FFE39C"
    },
  },
  navButtons: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 400,
  },
  typography: {
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.4rem",
      color: `${bleu}`,
      lineHeight: 1.5,
    },
  },
});
