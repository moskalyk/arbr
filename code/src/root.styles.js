// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Internals
import galaxy from '../../../images/galaxy.png';
import { GLOBALS } from '../../utils/globals';


export default makeStyles(theme => ({
  //
  // App Layout
  //
  root: {
    height: '100%'
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: GLOBALS.SIDEMENU_WIDTH,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: GLOBALS.SIDEMENU_WIDTH,
  },

  mainContainer: {
    marginBottom: 20,
    // minHeight: '91vh',
  },
  content: {
    width: '100%',
    padding: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  appBarTransparent: {
    background: 'transparent !important',
    boxShadow: 'none',
  },
  appBarSolid: {
    zIndex: 2000,
    background: `${GLOBALS.BRANDING.BACKGROUND.PAPER} !important`,
  },
  toolbar: theme.mixins.toolbar,

  tabBar: {
    flexGrow: 1,
    width: '100%',
  },

  pageHeader: {
    margin: '1.5rem 0 1rem !important',
  },

  sidemenu: {
    ...theme.mixins.toolbar,
  },

  galaxyBackground: {
    backgroundColor: 'transparent',
    backgroundBlendMode: 'lighten',
    backgroundImage: `url(${galaxy})`,
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',

    backgroundSize: '95%',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '85%',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundSize: '55%',
    },
  },

  //
  // App Loading Modal
  //
  loadingContainer: {
    margin: '2rem 0',

    '& span': {
      marginLeft: '1.4rem',
      fontSize: '1.15rem',
      lineHeight: '2rem',
      verticalAlign: 'super',
    }
  },
  loadingPaper: {
    padding: '1rem 1.5rem',
  },

  //
  // App Common
  //
  gridRow: {
    marginTop: '0.5rem',
  },

  fullWidth: {
    width: '100%'
  },

  fullHeight: {
    minHeight: '100%'
  },

  formControl: {
    width: '100%'
  },

  alignRight: {
    textAlign: 'right'
  },

  ghostFont: {
    color: theme.palette.common.ghostWhite,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(13),
  },

  mutedFont: {
    opacity: 0.6
  },

  overline2: {
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'none',
    color: theme.palette.common.whaleSkin,
    marginBottom: 0,
    lineHeight: 1.25,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  energizePaper: {
    padding: 15,
    wordWrap: 'break-word',
  },

  energizePaperHeader: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    marginLeft: `${theme.spacing(1)}px !important`
  },

  energizeDialogPadding: {
    padding: 30,
    '& .energizePaperHeader': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14),
      marginLeft: theme.spacing(1)
    }
  },

  energizeSectionSeparator: {
    borderBottom: `1px solid ${theme.palette.common.deeperSea}`,
  },

  overflowText: {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  //
  // Popup Modal
  //
  simpleModal: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: theme.spacing(60),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    padding: theme.spacing(4),
    outline: 'none',
  },

  //
  // Asset Select Boxes
  //
  selectBoxMenu: {
    width: '100%',
    background: theme.palette.background.secondaryPaper,
    borderRadius: 4,
    boxShadow: `0 0 0 1px 'hsla(218, 50%, 10%, 0.1)', 0 4px 11px 'hsla(218, 50%, 10%, 0.1)'`,
    marginTop: 8,
    color: theme.palette.common.ghostWhite,
    position: 'absolute',
    zIndex: 99999,
  },

  //
  // Tables
  //
  table: {
    padding: theme.spacing(1),
    width: '95%',
    margin: '0 auto'
  },

  tableHead: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.common.ghostWhite,
    padding: 0,
    paddingLeft: 14,
    paddingBottom: 10,
    borderBottom: `1px solid ${theme.palette.common.deeperSea}`,
    borderRight: `1px solid ${theme.palette.common.deeperSea}`,
    '&:last-child': {
      borderRight: 0,
    }
  },

  tableCell: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: 10,
    paddingRight: 5,
    '&:last-child': {
      borderRight: 0,
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },

  tableText: {
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: 10,
    paddingRight: 5,
  },

  //
  // Network logos
  //
  networkLogo: {
    width: '33px',
    height: '33px',
    marginLeft: theme.spacing(1),
  },

  //
  // TODO: Move to Component
  //
  textLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary
    }
  },
}));
