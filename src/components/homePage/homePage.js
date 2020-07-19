import React, { useContext } from 'react'
import { Grid, Link } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

const HomePage = () => {
  const classes = useStyles()
  const { Page, Value } = useContext(ButtonContext)

  return (
    <Grid container className={classes.component_container}>
      <h1 className={classes.welcome}>Welcome to ECOS</h1>
      <span className={classes.underQuote}>Ecos Regulatory Group is a consortium of environmental experts from around the country with over 40-years of national and international experience.</span>
      <Grid item className={classes.info_container}>
        <h2 className={classes.subHeader}>Our Expertise</h2>
        <p>Knowing the regulatory requirements is not enough.Our Associates have worked for major chemical manufacturers, terminal companies, railroads, and other industries. They are uniquely qualified to understand how to apply regulatory requirements and integrate them into your operations, in a meaningful, and cost effective way.</p>
        <p>From individual permit preparation to comprehensive program development, our goal is to minimize compliance risk and maximize customer satisfaction.</p>
      </Grid>
      <Link
        className={classes.link} to='/about'
        onClick={() => {
          Page[1](0)
          Value[1](0)
        }}
      >
        Learn More
      </Link>
    </Grid>
  )
}

export default HomePage
