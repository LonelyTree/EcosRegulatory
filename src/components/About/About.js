import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

export const About = () => {
  return (
    <Grid>
      <Link to={location => ({ ...location, pathname: '/about' })}>About</Link>
    </Grid>
  )
}
