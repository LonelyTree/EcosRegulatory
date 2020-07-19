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
    info_container: { marginTop: '30px' },
    info: {},
    topLink: { marginTop: '14px' },
    link: {
      marginTop: '14px',
      color: theme.palette.secondary.main,
      background: '#92e46270',
      padding: '12px',
      borderRadius: '10%'
    },
    services_container: {
      display: 'inline-flex',
      flexDirection: 'column'
    },
    services: {
      display: 'inherit',
      flexDirection: 'inherit',
      alignItems: 'center',
      margin: '5px 0px 5px 0px',
      background: theme.palette.primary.transparent
    },
    service_header: { textAlign: 'center' },
    service_details: { margin: '0px 0px 10px 10px' }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
}))
