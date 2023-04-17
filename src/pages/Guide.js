import React from 'react'
import { Container, Grid } from "@mui/material"
import { ScoutDocument, Navbar, Footer } from '../components'

const dataScoutDocument = [
  {
    name: "AD ART",
    file: "Unduh"
  },
  {
    name: "Juklak",
    file: "Unduh"
  }
];

export default function Guide() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <ScoutDocument dataScoutDocument={dataScoutDocument} />
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}