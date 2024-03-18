import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import "../styles/globals.css";
import { GoogleFonts } from "next-google-fonts";
import Layout from "../components/Layout";

const fonts = [
  {
    family: "Roboto Condensed",
    weights: ["400", "500", "700"],
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
