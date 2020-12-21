import {fontConfig} from './FontConfig';

export const COLORS = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  BACKGROUND_PRIMARY_NORMAL: '#FFFFFF',
  BACKGROUND_PRIMARY_DARK: '#161616',
  BACKGROUND_SECONDARY: '#E6E6E6',
  BACKGROUND_SECONDARY_BLK: '#262525',
  TEXT_PRIMARY_NORMAL: '#000000',
  TEXT_PRIMARY_DARK: '#CCCCCC',
  TEXT_INACTIVE_NORMAL: '#B1B1B1',
  TEXT_INACTIVE_DARK: '#414141',
  TEXT_COMMON_SILVER: '#717171',
  TEXT_VARAINT_1: '#8a8a8a',
  TEXT_VARAINT_1_BLK: '#e6e6e6',
  BLACK_VARIANT_2: '#1e1e1e',
  GREEN_VARAINT_1: '#71ffb2',
};

export const normalTheme = {
  colors: {
    backgroundPrimary: COLORS.BACKGROUND_PRIMARY_NORMAL,
    backgroundSecondary: COLORS.BACKGROUND_SECONDARY,
    textPrimary: COLORS.TEXT_PRIMARY_NORMAL,
    textInactive: COLORS.TEXT_INACTIVE_NORMAL,
    textSilverCommon: COLORS.TEXT_COMMON_SILVER,
    buttonPrimary: COLORS.BLACK,
    buttonTextPrimary: COLORS.WHITE,
    labelColor: COLORS.TEXT_VARAINT_1,
    backgroundGreenVariant1: COLORS.BLACK_VARIANT_2,
    backgroundGreenVariant2: COLORS.WHITE,
  },
  fonts: fontConfig.ProximaNova,
};

export const darkTheme = {
  colors: {
    backgroundPrimary: COLORS.BACKGROUND_PRIMARY_DARK,
    backgroundSecondary: COLORS.BACKGROUND_SECONDARY_BLK,
    textPrimary: COLORS.WHITE,
    textInactive: COLORS.TEXT_INACTIVE_DARK,
    textSilverCommon: COLORS.TEXT_COMMON_SILVER,
    buttonPrimary: COLORS.WHITE,
    buttonTextPrimary: COLORS.BLACK,
    backgroundGreenVariant1: COLORS.GREEN_VARAINT_1,
    backgroundGreenVariant2: COLORS.GREEN_VARAINT_1,
    labelColor: COLORS.TEXT_VARAINT_1,
  },
  fonts: fontConfig.ProximaNova,
};

export const fontSizes = {
  titleh1: 40,
  titleh2: 34,
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  paragraph: 14,
  small: 12,
  extraSmall: 10,
  xxs: 8,
};
export const SPACING = {
  ZERO: 0,
  TINY: 3,
  COMPACT: 5,
  XXS: 8,
  EXTRA_SMALL: 10,
  SMALL: 15,
  SMALL_1: 13,
  MEDIUM: 17,
  NORMAL: 20,
  LARGE: 23,
  EXTRA_LARGE: 25,
  LARGE4: 30,
  LARGE3: 33,
  LARGE2: 35,
  LARGE1: 50,
};
