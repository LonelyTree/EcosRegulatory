import React, { useContext } from 'react'
import { Grid, Link } from '@material-ui/core'
import ButtonContext from '../../buttonContext'
import { useStyles } from './styles'

const Contact = () => {
  const classes = useStyles()
  const { Page, Value } = useContext(ButtonContext)

  return (
    <Grid className={classes.component_container}>
      <Link
        className={classes.link} to='/'
        onClick={() => {
          Page[1](null)
          Value[1](null)
        }}
      >
        Home
      </Link>
      <h1 className={classes.header}>Get In Touch</h1>
      <Grid item className={classes.info_container}>
        {/* <p>Ecos Regulatory Group</p> */}
        <p>800 Jackson Avenue, Suite B</p>
        <p>Mandeville, Louisisana  70448</p>
        <p>o: 985-727-1840</p>
        <p>www.ecosregulatorygroup.com</p>
        <p>email: To Be Added</p>
      </Grid>
      <Link
        className={classes.link} to='/'
        onClick={() => {
          Page[1](null)
          Value[1](null)
        }}
      >
        Home
      </Link>
    </Grid>
  )
}

export default Contact
