import React from 'react'
import { Container, Grid } from "@mui/material"
import { AreaDkr, Navbar, Footer } from '../components'

export default function Dkr() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <AreaDkr />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}