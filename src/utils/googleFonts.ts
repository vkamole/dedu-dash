import { IGoogleFontsProps } from "next-google-fonts";

interface IGoogleFontsPropsWithFonts extends IGoogleFontsProps {
  fonts: Array<{ family: string; weights: string[] }>;
}

export default function googleFonts({ fonts }: IGoogleFontsPropsWithFonts) {
  return {
    fonts,
  };
}
