export interface ThemeColorGradient {
  lightest: string;
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
  darkest: string;
}

export interface ThemeColors {
  transparent: string;
  black: string;
  white: string;
  gray: ThemeColorGradient;
}

export interface ThemeFontFamilies {
  sans: string;
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  xl2: string;
  xl3: string;
  xl4: string;
  xl5: string;
  xl6: string;
}

export interface Theme {
  colors: ThemeColors;
  fontFamilies: ThemeFontFamilies;
  fontSizes: ThemeFontSizes;
}

export default Theme;
