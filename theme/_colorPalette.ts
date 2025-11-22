import { Palette } from '@mui/material';

const hexWithOpacity = (hex: string, opacity: number) => {
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');
  return `${hex}${alpha}`;
};

export const colorPalette = (mode: Palette['mode']): Palette => {
  const white = '#FFFFFF';

  /* === STATIC COLOR CODES (variable names unchanged) === */
  const primaryMain = '#3a816f'; // updated based on gradient midpoint
  const primaryDark = '#134e5e'; // updated based on gradient start
  const primaryLight = '#71b280'; // updated based on gradient end
  const secondaryMain = '#134e5e';

  return {
    customColors: {
      main: primaryMain,
      dark: primaryDark,
      light: primaryLight,

      /* You did NOT request new variable names, so not adding any */
      /* All names remain the same — values updated only */

      lightPaperBg: hexWithOpacity('#FFFFFF', 0.1),
      darkPaperBg: '#1A2430',
      bodyBg: mode === 'light' ? '#F4F6F8' : '#0D1219',
      trackBg: mode === 'light' ? '#DADADA' : '#18212E',
      avatarBg: mode === 'light' ? '#B6B6B6' : '#787878',
      tableHeaderBg: mode === 'light' ? '#F5F5F5' : '#101F2B',

      sidebarBg: mode === 'light' ? '#F5F5F5' : '#1A2330',

      white10: hexWithOpacity('#FFFFFF', 0.1),
      white20: hexWithOpacity('#FFFFFF', 0.2),
      white30: hexWithOpacity('#FFFFFF', 0.3),
      white11: hexWithOpacity('#FFFFFF', 0.11),
      textSecondary: '#727272',
      placeText: '#A6A6A6',
    },

    mode,

    common: {
      black: '#000000',
      white: '#FFFFFF',
    },

    primary: {
      light: primaryLight,
      main: primaryMain,
      dark: primaryDark,
      contrastText: '#FFFFFF',
    },

    secondary: {
      light: '#EC3D40',
      main: secondaryMain,
      dark: '#B70709',
      contrastText: '#FFFFFF',
    },

    error: {
      light: '#FFECF2',
      main: '#EB4444',
      dark: '#DA3135',
      contrastText: '#FFFFFF',
    },

    warning: {
      light: '#FFEFD7',
      main: 'rgba(255, 167, 33, 1)',
      dark: '#6F4F1F',
      contrastText: '#FFFFFF',
    },

    info: {
      light: '#D4FEFF',
      main: '#7CD1D2',
      dark: '#67C1C2',
      contrastText: '#FFFFFF',
    },

    success: {
      light: '#D4FEFF',
      main: '#3C8183',
      dark: '#3C8183',
      contrastText: '#FFFFFF',
    },

    grey: {
      50: '#F5F5F5',
      100: '#DADADA',
      200: '#CACACA',
      300: '#BDBDBD',
      400: '#ABABAB',
      500: '#A6A6A6',
      600: '#888888',
      700: '#787878',
      800: '#1A2430',
      900: '#0D1219',
      A100: '#F5F5F5',
      A200: '#DADADA',
      A400: '#A6A6A6',
      A700: '#1A2430',
    },

    text: {
      primary: mode === 'light' ? '#848484' : '#FFFFFF',
      secondary:
        mode === 'light' ? hexWithOpacity('#848484', 0.65) : hexWithOpacity('#FFFFFF', 0.65),
      disabled:
        mode === 'light' ? hexWithOpacity('#848484', 0.38) : hexWithOpacity('#FFFFFF', 0.38),
    },

    divider: mode === 'light' ? hexWithOpacity('#CACACA', 0.3) : hexWithOpacity('#18212E', 0.3),

    background: {
      paper: mode === 'light' ? '#FFFFFF' : '#1F3242',
      default: mode === 'light' ? '#F4F6F8' : '#0D1219',
    },

    action: {
      active: hexWithOpacity(primaryMain, 0.6),
      hover: hexWithOpacity(primaryMain, 0.08),
      selected: hexWithOpacity(primaryMain, 0.12),
      disabled: hexWithOpacity(primaryMain, 0.38),
      disabledBackground: hexWithOpacity(primaryMain, 0.18),
      focus: hexWithOpacity(primaryMain, 0.18),
      selectedOpacity: 0.1,
    },
  } as Palette;
};
