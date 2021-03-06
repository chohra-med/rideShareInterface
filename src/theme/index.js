import {Platform} from 'react-native';

export default {
  // FONT FAMILY
  FONT_FAMILY: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
  }),
  FONT_FAMILY_SECONDARY: Platform.select({
    android: 'sans-serif',
    ios: 'sans-serif',
  }),

  // FONT SIZE
  SIZE_SMALL: 16,
  SIZE_MEDIUM: 20,
  SIZE_LARGE: 28,
  // FONT WEIGHT
  WEIGHT_LIGHT: '200',
  WEIGHT_MEDIUM: '600',
  WEIGHT_HEAVY: '800',
  // COLORS
  PRIMARY_COLOR_LIGHT: '#',
  PRIMARY_COLOR: '#06B49A',
  PRIMARY_COLOR_DARK: '#2667C9',
  SECONDARY_COLOR_DARK: '#2d7bc3',
  SECONDARY_COLOR: '#AFDBD2',
  SECONDARY_COLOR_LIGHT: '#6095cd',
  WHITE: '#ffffff',
  WHITE_POWDER: '#FFFDF9',
  DARK_ONYX: '#36313D',
  LIGHTER: '#afafaf',
  LIGHT: '#707070',
  DEFAULT: '#4b4b4b',
  DARK: '#313131',
  DARKER: '#1b1b1b',
  BLACK: '#000000',
  // OTHER COLORS
  FACEBOOK: '#2d7bc3',
  // SEPARATOR: '#b2b0b0',
};

// FONTS
// GESSTwoMedium Medium
