import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    component_container: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    header: {
      marginTop: '25px',
      textAlign: 'center',
      background: theme.palette.primary.transparent
    },
    info_container: {
      marginTop: '30px',
      background: theme.palette.primary.transparent,
      '& p': { margin: '10px' }
    },
    info: {
      margin: '10px',
      letterSpacing: '.2px',
      '& p': { margin: '3px' }
    },
    link: { marginTop: '14px' }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
