import React, { useState } from 'react'
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
// import { Link } from 'react-router-dom'
import { useStyles } from './styles'

export const Nav = () => {
  const classes = useStyles()
  const [value, setValue] = useState(null)

  return (
    <Grid item className={classes.nav_container}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label='About' />
        <BottomNavigationAction label='Services' />
        <BottomNavigationAction label='Contact' />
      </BottomNavigation>
    </Grid>)
}
