import { PaletteMode } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { colorPalette } from './_colorPalette';
import { intertight, poppins } from './_themeFonts';

export const ThemeStyleOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: colorPalette(mode),
    typography: {
      fontFamily: [`${poppins.style.fontFamily}`].join(','),
      fontWeightLight: 300,
      h1: {
        fontSize: '90px',
        lineHeight: '1.1em',
        color: colorPalette(mode).primary.main,
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
        '@media(max-width:1799px)': {
          fontSize: '75px',
        },
        '@media(max-width:1535px)': {
          fontSize: '70px',
        },
        '@media(max-width:1399px)': {
          fontSize: '65px',
        },
        '@media(max-width:1199px)': {
          fontSize: '50px',
        },
        '@media(max-width:899px)': {
          fontSize: '40px',
        },
        '@media(max-width:599px)': {
          fontSize: '32px',
        },
        '@media(max-width:479px)': {
          fontSize: '28px',
        },
      },
      h2: {
        fontSize: '65px',
        lineHeight: '1.1em',
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
        '@media(max-width:1799px)': {
          fontSize: '55px',
        },
        '@media(max-width:1535px)': {
          fontSize: '48px',
        },
        '@media(max-width:1399px)': {
          fontSize: '42px',
        },
        '@media(max-width:1199px)': {
          fontSize: '36px',
        },
        '@media(max-width:899px)': {
          fontSize: '32px',
        },
        '@media(max-width:599px)': {
          fontSize: '24px',
        },
        '@media(max-width:479px)': {
          fontSize: '22px',
        },
      },
      h3: {
        fontSize: '50px',
        lineHeight: '1.1em',
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
        '@media(max-width:1799px)': {
          fontSize: '40px',
        },
        '@media(max-width:1535px)': {
          fontSize: '36px',
        },
        '@media(max-width:1399px)': {
          fontSize: '32px',
        },
        '@media(max-width:1199px)': {
          fontSize: '28px',
        },
        '@media(max-width:899px)': {
          fontSize: '24px',
        },
        '@media(max-width:599px)': {
          fontSize: '20px',
        },
      },
      h4: {
        fontSize: '26px',
        lineHeight: '1.3',
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
        '@media(max-width:1199px)': {
          fontSize: '24px',
        },
        '@media(max-width:899px)': {
          fontSize: '20px',
        },
        '@media(max-width:599px)': {
          fontSize: '18px',
        },
      },
      h5: {
        fontSize: '22px',
        lineHeight: '1.3',
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
      },
      h6: {
        fontSize: '20px',
        lineHeight: '1.5',
        fontWeight: '700',
        fontFamily: `${intertight.style.fontFamily}`,
      },
      body1: {
        fontSize: '16px',
        lineHeight: '1.5em',
        fontWeight: '300',
        fontFamily: `${poppins.style.fontFamily}`,
      },
      body2: {
        fontSize: '15px',
        lineHeight: '1.5em',
      },
      caption: {
        fontSize: '14px',
        lineHeight: '1.5em',
      },
    },
    shadows: [
      'none',
      '0px 2px 4px 0px rgba(47, 43, 61, 0.12)',
      '0px 2px 6px 0px rgba(47, 43, 61, 0.14)',
      '0px 3px 8px 0px rgba(47, 43, 61, 0.14)',
      '0px 3px 9px 0px rgba(47, 43, 61, 0.15)',
      '0px 4px 10px 0px rgba(47, 43, 61, 0.15)',
      '0px 4px 11px 0px rgba(47, 43, 61, 0.16)',
      '0px 4px 18px 0px rgba(47, 43, 61, 0.1)',
      '0px 4px 13px 0px rgba(47, 43, 61, 0.18)',
      '0px 5px 14px 0px rgba(47, 43, 61, 0.18)',
      '0px 5px 15px 0px rgba(47, 43, 61, 0.2)',
      '0px 5px 16px 0px rgba(47, 43, 61, 0.2)',
      '0px 6px 17px 0px rgba(47, 43, 61, 0.22)',
      '0px 6px 18px 0px rgba(47, 43, 61, 0.22)',
      '0px 6px 19px 0px rgba(47, 43, 61, 0.24)',
      '0px 7px 20px 0px rgba(47, 43, 61, 0.24)',
      '0px 7px 21px 0px rgba(47, 43, 61, 0.26)',
      '0px 7px 22px 0px rgba(47, 43, 61, 0.26)',
      '0px 8px 23px 0px rgba(47, 43, 61, 0.28)',
      '0px 8px 24px 6px rgba(47, 43, 61, 0.28)',
      '0px 9px 25px 0px rgba(47, 43, 61, 0.3)',
      '0px 9px 26px 0px rgba(47, 43, 61, 0.32)',
      '0px 9px 27px 0px rgba(47, 43, 61, 0.32)',
      '0px 10px 28px 0px rgba(47, 43, 61, 0.34)',
      '0px 10px 30px 0px rgba(47, 43, 61, 0.34)',
    ],

    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: 'wave',
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ _ownerState, theme }) => {
            return {
              borderRadius: '8px',
              boxShadow: `0px 4px 24px 0px ${theme.palette.background.paper}`,
            };
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: () => {
            return {
              '@media(max-width:899px)': {
                minHeight: '20px',
              },
            };
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: ({ _theme }) => {
            return {
              overflow: 'visible !important',
              filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
              marginTop: '6px',

              '@media(max-width:899px)': {
                marginTop: '0',
              },
            };
          },
          list: () => {
            return {
              paddingTop: '4px',
              paddingBottom: '4px',
            };
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            const baseStyles = {
              borderRadius: '10px',
              color: theme.palette.common.white,
              padding: '13px 48px',
              fontSize: '15px',
              fontWeight: 600,
            };
            if (ownerState.variant === 'contained' && ownerState.color === 'primary') {
              return {
                ...baseStyles,
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
                textTransform: 'capitalize',
                border: '1px solid transparent',
                '&:hover': {
                  background: theme.palette.common.white,
                  border: `1px solid ${theme.palette.primary.main}`,
                  color: theme.palette.primary.main,
                },
              };
            }

            if (ownerState.variant === 'contained' && ownerState.color === 'secondary') {
              return {
                ...baseStyles,
                background: theme.palette.secondary.main,
                color: theme.palette.common.white,
                textTransform: 'capitalize',
                '&:hover': {
                  background: theme.palette.primary.main,
                },
              };
            }

            if (ownerState.variant === 'outlined' && ownerState.color === 'primary') {
              return {
                ...baseStyles,
                background: theme.palette.common.white,
                color: theme.palette.secondary.main,
                textTransform: 'capitalize',
                border: `1px solid ${theme.palette.customColors?.color002F06}`,
                '&:hover': {
                  background: theme.palette.primary.main,
                  color: theme.palette.common.white,
                },
              };
            }

            if (ownerState.variant === 'text') {
              return {
                padding: 0,
                minWidth: 'auto',
                color: theme.palette.customColors?.color002F06,
                textTransform: 'capitalize',
                fontWeight: 600,
                fontSize: '16px',
                height: 'auto',
                lineHeight: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              };
            }

            return { ...baseStyles };
          },
        },
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
      },

      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },

      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },

      MuiList: {
        defaultProps: {
          disablePadding: true,
        },
      },

      MuiListItem: {
        defaultProps: {
          disablePadding: true,
        },
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backdropFilter: 'blur(4px)',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: ({ theme }) => ({
            backgroundColor: theme?.palette?.primary.main,
          }),
        },
      },

      MuiStack: {
        defaultProps: {
          direction: 'row',
        },
      },
    },
  };
};
