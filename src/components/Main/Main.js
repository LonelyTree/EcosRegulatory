import React from 'react'
import { Grid } from '@material-ui/core'
import { Header } from '../Header/Header'
import { useStyles } from './styles'
import { Nav } from '../Nav/Nav'

export const Main = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.main_container}>
      <Header />
      <Nav />
      <Grid item>DESCRIPTION</Grid>
      <Grid item>FOOTER</Grid>
    </Grid>
  )
}
