import { createTheme } from "@mui/material/styles";

// Define the custom theme type
interface CustomTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
  typography: {
    fontFamily: string | undefined;
  };
}

// Create your custom theme
const theme: CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#6fd219", // adjust the primary color as needed
    },
    secondary: {
      main: "#d6db3d", // adjust the secondary color as needed
    },
  },
  typography: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
});

// const theme: CustomTheme = createTheme({
//   palette: {
//     primary: {
//       main: "rgba(111, 210, 25, 0.8)", // Adjust the alpha value as needed
//     },
//     secondary: {
//       main: "#d6db3d", // adjust the secondary color as needed
//     },
//   },
//   typography: {
//     fontFamily: "Roboto Condensed, sans-serif",
//   },
// });

export default theme;
