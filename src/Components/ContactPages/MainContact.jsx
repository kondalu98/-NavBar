import { Contacs } from './Contacs'
import { Contact } from './Contact'
import { Form } from './Form'
import { Grid } from './Grid'
import React from 'react'

export function MainContact() {
  return (
    <div>
      <Contact></Contact>
      <Grid></Grid>
      <Form></Form>
      <Contacs></Contacs>
    </div>
  )
}

export default MainContact
