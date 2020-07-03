import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    main_container: {
      padding: '4%',
      height: '100vh',
      alignItems: 'center',
      flexDirection: 'column'
    },
    header: {
      color: 'green'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
