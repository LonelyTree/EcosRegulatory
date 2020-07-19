import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    welcome: {
      marginTop: '20%',
      textAlign: 'center',
      background: theme.palette.primary.transparent
    },
    info_container: { marginTop: '20%' },
    info: {},
    link: { color: 'black' }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
