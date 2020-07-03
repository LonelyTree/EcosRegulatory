import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import LOGO from '../../img/Ecos_color_simple.png'
import { useStyles } from './styles'

export const Header = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.header_container}>
      <Link underline='none' to={location => ({ ...location, pathname: '/' })} className={classes.link}>
        <img src={LOGO} alt='ECOS LOGO' className={classes.logo} />
        <p>ECOS REGULATORY GROUP</p>
      </Link>
    </Grid>
  )
}
