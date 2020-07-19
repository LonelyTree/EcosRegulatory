import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    component_container: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    welcome: {
      marginTop: '60px',
      textAlign: 'center',
      background: theme.palette.primary.transparent
    },
    underQuote: {
      fontSize: '12px',
      marginLeft: '20px',
      paddingLeft: '10px',
      borderLeft: '#16add6 solid 10px',
      background: '#ffffff75'
    },
    subHeader: { textAlign: 'center' },
    info_container: {
      marginTop: '30px',
      background: theme.palette.primary.transparent,
      '& p': {}
    },
    link: {
      marginTop: '5%',
      color: theme.palette.secondary.main,
      background: '#92e46270',
      padding: '12px',
      borderRadius: '10%'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
