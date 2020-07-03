import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    link: {
      display: 'inherit',
      alignItems: 'center',
      flexDirection: 'column',
      textDecoration: 'none',
      background: theme.palette.primary.main,
      '& p': {
        color: theme.palette.text.primary,
        marginBottom: '5px'
      }
    },
    logo: {
      width: '40%',
      marginTop: '10px'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
