import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import LOGO from '../../img/Ecos_color_simple.png'
import { useStyles } from './styles'

export const Footer = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.footer_container}>
      <Grid item className={classes.list}>
        <p>Est. 2015</p>
        <p>ECOS Regulatory Group</p>
        <p>Mandeville, LA 70448</p>
      </Grid>
    </Grid>
  )
}
