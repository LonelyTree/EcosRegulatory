import React, { useContext } from 'react'
import { Grid, Link } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

const About = () => {
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
      <h1 className={classes.header}>About ECOS</h1>
      <Grid item className={classes.info_container}>
        <p>Over the years, health, safety, security and environmental consulting firms have consolidated into huge entities e.g., CH2M Hill, Tetra Tech Inc., AECOM.  That is not to say that they don’t do good work, however, there is an upward trend for the need of personalized, focused, and affordable HSSE consultants.
        </p>
        <p>Ecos Regulatory Group is a consortium of professional consultants that provide such a service.  Our associates are located throughout the U.S.  We represent all environmental disciplines including water, waste, air, remediation, auditing, etc.

        </p>
        <p>Ecos services can be provided by an individual expert, or a team of consultants, with the requisite experience.  This collaboration of professionals offers the technical expertise of a large firm, with the flexibility and affordability of a small firm.</p>
      </Grid>
      <Link
        className={classes.link} to='/'
        onClick={() => {
          Page[1](1)
          Value[1](1)
        }}
      >
        Services
      </Link>
    </Grid>
  )
}

export default About
