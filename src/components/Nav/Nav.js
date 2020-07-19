import React, { useState, useEffect, useContext, useRef } from 'react'
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

export const Nav = (props) => {
  const classes = useStyles()
  const [page, setPage] = useContext(ButtonContext)
  const [value, setValue] = useState(null)
  const refValue = useRef(value)

  useEffect(() => {
    const liftUp = () => {
      if (page === null && refValue.current === value) {
        setValue(null)
        setPage(null)
      } else {
        setPage(value)
        refValue.current = value
      }
    }
    liftUp()
  }, [value, page, setPage, refValue])

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
