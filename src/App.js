import React, { useState } from 'react'
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import { theme } from './theme.js'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Services } from './components/Services/Services'
import ButtonContext from './buttonContext'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import HomePage from './components/homePage/homePage'
import { Nav } from './components/Nav/Nav'
import { useStyles } from './appStyles'

function App () {
  const classes = useStyles()
  const [page, setPage] = useState(null)
  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={classes.main_container}>
          <ButtonContext.Provider value={[page, setPage]}>
            <Header />
            <Nav />
            <Grid item>{(page === 0) ? <About /> : (page === 1) ? <Services /> : (page === 2) ? <Contact /> : <HomePage />}</Grid>
            <Footer />
          </ButtonContext.Provider>
        </Grid>
      </ThemeProvider>
    </Grid>
  )
}

export default App
