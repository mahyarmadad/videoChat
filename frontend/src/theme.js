import { createTheme } from "@material-ui/core";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
      },
      input: {
        padding: 16,
      },
      adornedEnd: {
        paddingRight: 8,
      },
    },
    MuiIconButton: {
      root: {
        padding: 8,
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
  palette: {
    type: "dark",
    // primary: { main: "#039be5" },
    // secondary: { main: "#ffb300" },
  },
});
export default theme;
