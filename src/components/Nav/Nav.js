import React, { useContext } from 'react'
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

export const Nav = (props) => {
  const classes = useStyles()
  const { Page, Value } = useContext(ButtonContext)
  return (
    <Grid item className={classes.nav_container}>
      <BottomNavigation
        value={Value[0]}
        onChange={(event, newValue) => {
          Value[1](newValue)
          Page[1](newValue)
        }}
        showLabels
        className={classes.nav_switchboard}
      >
        <BottomNavigationAction label='About' />
        <BottomNavigationAction label='Services' />
        <BottomNavigationAction label='Contact' />
      </BottomNavigation>
    </Grid>)
}
