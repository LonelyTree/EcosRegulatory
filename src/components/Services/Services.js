import React, { useContext } from 'react'
import { Grid, Link } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

import ServiceDetails from './serviceDetails'

const Services = () => {
  const classes = useStyles()
  const { Page, Value } = useContext(ButtonContext)

  return (
    <Grid className={classes.component_container}>
      <Link
        className={classes.topLink} to='/'
        onClick={() => {
          Page[1](null)
          Value[1](null)
        }}
      >
        Home
      </Link>
      <h1 className={classes.header}>ECOS Services</h1>
      <Grid item className={classes.info_container}>
        <p className={classes.info}>The Ecos Regulatory Group approach is based upon our technical competence, our professional experience, regular communication with our clients, and above all, responsiveness to the needs of our clients to provide superior and creative project solutions.
        </p>
      </Grid>
      <Grid item className={classes.services_container}>
        {ServiceDetails.map((service) => {
          return (
            <Grid item container key={service.name} className={classes.services}>
              <h3 className={classes.service_header}>{service.name}</h3>
              <p className={classes.service_details}>{service.details}</p>
            </Grid>
          )
        })}
      </Grid>
      <Link
        className={classes.link} to='/'
        onClick={() => {
          Page[1](2)
          Value[1](2)
        }}
      >
        Contact Us
      </Link>
    </Grid>
  )
}

export default Services
