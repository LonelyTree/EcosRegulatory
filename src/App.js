import React from 'react'
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import { theme } from './theme.js'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Services } from './components/Services/Services'
import { Main } from './components/Main/Main'
function App () {
  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path='/about' render={() => <About />} />
          <Route path='/services' render={() => <Services />} />
          <Route path='/contact' render={() => <Contact />} />
          <Route path='/' render={() => <Main />} />
        </Switch>
      </ThemeProvider>
    </Grid>
  )
}

export default App
