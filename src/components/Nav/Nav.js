import React, { useContext } from 'react'
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

export const Nav = (props) => {
  const classes = useStyles()
  const [page, setPage, value, setValue] = useContext(ButtonContext)

  return (
    <Grid item className={classes.nav_container}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          setPage(newValue)
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
