import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import HomePage from './homePage'
import { Nav } from '../Nav/Nav'
import { About } from '../About/About'
import { Services } from '../Services/Services'
import { Contact } from '../Contact/Contact'

import { useStyles } from './styles'

export const Main = () => {
  const classes = useStyles()
  const [page, setPage] = useState(null)
  const [clicked, setClicked] = useState(false)

  console.log(page)
  console.log(clicked)
  return (
    <Grid container className={classes.main_container}>
      <ButtonContext.Provider value={[setPage, setClicked, clicked]}>
        <Header />
        <Nav />
        <Grid item>{(page === 0) ? <About /> : (page === 1) ? <Services /> : (page === 2) ? <Contact /> : <HomePage />}</Grid>
        <Footer />
      </ButtonContext.Provider>
    </Grid>
  )
}
