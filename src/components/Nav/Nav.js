import React, { useState, useEffect, useContext } from 'react'
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

export const Nav = (props) => {
  const classes = useStyles()
  const [setPage, setClicked, clicked] = useContext(ButtonContext)
  const [value, setValue] = useState(null)

  useEffect(() => {
    const liftUp = () => {
      if (clicked) {
        setValue(null)
        setPage(null)
      } else { setPage(value) }
    }
    liftUp()
  }, [value, clicked, setPage])

  return (
    <Grid item className={classes.nav_container}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
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
