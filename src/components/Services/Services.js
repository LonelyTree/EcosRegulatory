import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

export const Services = () => {
  return (
    <Grid>
      <Link to={location => ({ ...location, pathname: '/services' })}>Services</Link>
    </Grid>
  )
}
