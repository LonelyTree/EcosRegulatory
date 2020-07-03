import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    nav_container: {
      display: 'inherit',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    link: {
      textDecoration: 'none',
      '& Button': { height: '100%' }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
