import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    nav_container: {
      background: 'blue',
      display: 'inherit',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    nav_switchboard: {
      width: '100%',
      '& button.Mui-selected': { background: '#88c962' }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
