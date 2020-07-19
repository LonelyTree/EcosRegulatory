import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    footer_container: {
      display: 'inline-flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: ' 5% 0% 5% 0%'
    },
    list: {
      width: '100%',
      background: theme.palette.primary.main,
      display: 'inherit',
      justifyContent: 'space-evenly',
      fontSize: '10%'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
