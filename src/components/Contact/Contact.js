import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

export const Contact = () => {
  return (
    <Grid>
      <Link to={location => ({ ...location, pathname: '/contact' })}>Contact</Link>
    </Grid>
  )
}
