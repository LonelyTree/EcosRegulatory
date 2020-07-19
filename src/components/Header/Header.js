import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import LOGO from '../../img/Ecos_color_simple.png'
import { useStyles } from './styles'

export const Header = (props) => {
  const classes = useStyles()
  const [page, setPage] = useContext(ButtonContext)
  const setRef = useRef(page)

  const toMainPage = () => {
    if (setRef.current !== page) {
      setPage(null)
      setRef.current = null
    }
  }

  return (
    <Grid container className={classes.header_container}>
      <Link
        className={classes.link}
        onClick={toMainPage}
        to='/'
      >
        <img src={LOGO} alt='ECOS LOGO' className={classes.logo} />
        <p>Regulatory Group</p>
      </Link>
    </Grid>
  )
}
