import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import LOGO from '../../img/Ecos_color_simple.png'
import { useStyles } from './styles'

export const Header = (props) => {
  const classes = useStyles()
  const { Page, Value } = useContext(ButtonContext)
  return (
    <Grid container className={classes.header_container}>
      <Link
        className={classes.link}
        onClick={() => {
          Page[1](null)
          Value[1](null)
        }}
        to='/'
      >
        <img src={LOGO} alt='ECOS LOGO' className={classes.logo} />
        <p>Regulatory Group</p>
      </Link>
    </Grid>
  )
}
