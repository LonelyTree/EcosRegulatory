import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Header } from '../Header/Header'
import { useStyles } from './styles'
import { Nav } from '../Nav/Nav'

export const Main = () => {
  const classes = useStyles()
  const [page, setPage] = useState(null)
  return (
    <Grid container className={classes.main_container}>
      <Header />
      <Nav lift={setPage} />
      <Grid item>{(page === 0) ? <p>0</p> : (page === 1) ? <p>1</p> : (page === 2) ? <p>2</p> : null}</Grid>
      <Grid item>FOOTER</Grid>
    </Grid>
  )
}
