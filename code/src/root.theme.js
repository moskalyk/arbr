// Frameworks
import { createTheme, createStyles } from '@material-ui/core/styles';

import {GLOBALS} from './globals'

// Material UI
// see: https://material-ui.com/customization/default-theme/
// see https://v3.material-ui.com/style/color/
// see https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=EC407A&secondary.color=8E24AA

export default createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Montserrat, Arial, sans-serif',

    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    allVariants: {
      // lineHeight: 1.25,
      letterSpacing: 0,
    },

    h1: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    h3: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    h4: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    h5: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },
    h6: {
      fontFamily: 'Montserrat, Arial, sans-serif',
    },

    subtitle1: {
      fontWeight: 700,
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1rem',
      color: GLOBALS.BRANDING.COMMON.ASH,
    },

    body1: {
      fontSize: '0.8rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.8rem',
      color: GLOBALS.BRANDING.COMMON.ASH,
    },

    button: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.75,
      letterSpacing: 0,
      textTransform: 'none',
    },

    caption: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: GLOBALS.BRANDING.COMMON.WHALESKIN,
    },

    overline: {
      fontSize: '0.8rem',
      fontWeight: 700,
      textTransform: 'none',
      color: GLOBALS.BRANDING.COMMON.ASH,
      marginBottom: 0,
      lineHeight: 1.25,
    },

    overline2: {
      fontSize: '0.8rem',
      fontWeight: 700,
      textTransform: 'none',
      color: GLOBALS.BRANDING.COMMON.WHALESKIN,
      marginBottom: 0,
      lineHeight: 1.25,
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: GLOBALS.BRANDING.BACKGROUND.DEFAULT,
      paper:   GLOBALS.BRANDING.BACKGROUND.PAPER,
      dialogPaper: GLOBALS.BRANDING.BACKGROUND.DIALOG,
      secondaryPaper: GLOBALS.BRANDING.BACKGROUND.SECONDARY_PAPER,
    },
    primary: {
      light: '#c4336f',
      main: GLOBALS.BRANDING.PRIMARY,
      dark: '#7f0035',
      contrastText: GLOBALS.BRANDING.COMMON.WHITE,
    },
    secondary: {
      light: '#6c77ca',
      main: GLOBALS.BRANDING.SECONDARY,
      dark: '#323b84',
      contrastText: GLOBALS.BRANDING.COMMON.WHITE,
    },
    error: {
    //   light: '',
      main: '#ff0800',
    //   dark: '',
    //   contrastText: '',
    },
    // warning: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
    // info: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
    // success: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },


    text: {
      primary: GLOBALS.BRANDING.COMMON.WHITE,
      secondary: GLOBALS.BRANDING.COMMON.ASH,
      disabled: GLOBALS.BRANDING.COMMON.WHALESKIN,
      hint: GLOBALS.BRANDING.COMMON.GHOSTWHITE,
      icon: GLOBALS.BRANDING.COMMON.WHITE,
    },

    common: {
      white: GLOBALS.BRANDING.COMMON.WHITE,
      ghostWhite: GLOBALS.BRANDING.COMMON.GHOSTWHITE,
      ash: GLOBALS.BRANDING.COMMON.ASH,
      blueSlate: GLOBALS.BRANDING.COMMON.BLUESLATE,
      deepBlue: GLOBALS.BRANDING.COMMON.DEEPBLUE,
      whaleSkin: GLOBALS.BRANDING.COMMON.WHALESKIN,
      lime: GLOBALS.BRANDING.COMMON.LIME,
      deepSea: GLOBALS.BRANDING.COMMON.DEEPSEA,
      deeperSea: GLOBALS.BRANDING.COMMON.DEEPERSEA,
      pink: GLOBALS.BRANDING.COMMON.PINK,
    }
  },

  shape: {
    borderRadius: GLOBALS.BRANDING.BORDER_RADIUS,
  },

  overrides: {
    MuiPaper: createStyles({
      root: {
        backgroundColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
        boxShadow: '0 0 36px rgba(0, 0, 0, 0.03)',
      }
    }),
    MuiPopover: createStyles({
      paper: {
        backgroundColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
      }
    }),
    MuiDrawer: createStyles({
      paper: {
        backgroundColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
      }
    }),
    MuiCard: createStyles({
      root: {
        backgroundColor: GLOBALS.BRANDING.COMMON.DEEPBLUE,
        boxShadow: '0 0 36px rgba(0, 0, 0, 0.03)',
      }
    }),
    MuiCardActionArea: createStyles({
      root: {
        padding: 12,
      }
    }),
    MuiCardMedia: createStyles({
      root: {
        borderRadius: GLOBALS.BRANDING.BORDER_RADIUS,
      }
    }),
    MuiButton: createStyles({
      root: {
        lineHeight: 2,
      },
      containedPrimary: {
        background: 'linear-gradient(90deg, #B6004C 4.92%, #D8226E 100%)',
      },
      containedSecondary: {
        boxShadow: '0px 0px 36px rgba(0, 0, 0, 0.03)',
        color: GLOBALS.BRANDING.COMMON.GHOSTWHITE,
        borderRadius: GLOBALS.BRANDING.BUTTON_BORDER_RADIUS,
        backgroundColor: GLOBALS.BRANDING.BACKGROUND.SECONDARY_PAPER,
        '&:hover': {
          color: GLOBALS.BRANDING.COMMON.WHITE,
          backgroundColor: GLOBALS.BRANDING.BACKGROUND.SECONDARY_PAPER,
          boxShadow: '0px 0px 36px rgba(0, 0, 0, 0.05)',
        },
        '&.MuiButton-fullWidth': {
          borderRadius: 5,
        },
        '& .MuiButton-startIcon svg path': {
            fill: GLOBALS.BRANDING.COMMON.GHOSTWHITE,
        },
        '&.Mui-disabled .MuiButton-startIcon svg path': {
          opacity: 0.3
        },
        '&:hover .MuiButton-startIcon svg path': {
          fill: GLOBALS.BRANDING.COMMON.WHITE,
        }
      }
    }),
    MuiFormControlLabel: createStyles({
      label: {
        fontSize: '0.8rem',
        color: GLOBALS.BRANDING.COMMON.ASH,
      }
    }),
    MuiTextField: createStyles({
      root: {
        borderRadius: GLOBALS.BRANDING.BORDER_RADIUS,
        backgroundColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
        boxShadow: '0 0 36px rgba(0, 0, 0, 0.03)',
      }
    }),
    MuiOutlinedInput: createStyles({
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: GLOBALS.BRANDING.COMMON.BLUESLATE,
        },
      },
      input: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: GLOBALS.BRANDING.COMMON.WHITE,
        '&[type=number]': {
          fontSize: '1.4rem',
          letterSpacing: '1px',
          overflow: 'hidden',
          fontFamily: 'Inter, Montserrat, Roboto, Arial, sans-serif',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontWeight: 500,
          appearance: 'textfield',
        }
      },
      notchedOutline: {
        borderColor: GLOBALS.BRANDING.BACKGROUND.PAPER,
      }
    }),
  }
});
