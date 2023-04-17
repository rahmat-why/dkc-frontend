import React from 'react'
import { Container, Grid } from "@mui/material"
import { Visi, Misi, Achievement, PotensiSegment, Navbar, Footer } from "../components"

const dataVisi = [
  {
    goal_id: "GOALxx",
    description: "Descxx",
    type: "VISI"
  },
  {
    goal_id: "GOALxx",
    description: "Descxx",
    type: "VISI"
  }
]

const dataMisi = [
  {
    goal_id: "GOALxx",
    description: "Descxx",
    type: "MISI"
  },
  {
    goal_id: "GOALxx",
    description: "Descxx",
    type: "MISI"
  }
]

const dataAchievement = [
  {
    achievement_id: "ACHxx",
    title: "Titlexx",
    description: "Descxx"
  },
  {
    achievement_id: "ACHxx",
    title: "Titlexx",
    description: "Descxx"
  }
]

const dataPotensiSegment = [
  {
    segment: "Namexx",
    total_member: "100"
  },
  {
    segment: "Namexx",
    total_member: "100"
  }
]

export default function About() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Visi dataVisi={dataVisi} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Misi dataMisi={dataMisi} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Achievement dataAchievement={dataAchievement} />
          </Grid>
          <Grid item md={12} xs={12}>
            <PotensiSegment dataPotensiSegment={dataPotensiSegment} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}
