import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    primary: { main: "#000942", light: "#5F77BA" },
    secondary: { main: "#B99F5F", light: "#FFE39C" },
    // bleu: "#5F77BA",
    // yellowGold:'#FFE39C',
  },
  navButtons: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 400,
  },
});
