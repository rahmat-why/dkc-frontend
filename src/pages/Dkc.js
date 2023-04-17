import React from 'react'
import { Container, Grid } from "@mui/material"
import { SpeechLeader, AreaCoordinator, ProfileOfficer, ProgramDkc, Navbar, Footer } from '../components'

const dataSpeechLeader = {
  speech_id: "SPCxx",
  name: "Namexx",
  nta: "NTAxx",
  image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/visimisi/194-visi.jpg",
  description: "Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from"
}

const dataAreaCoordinator = [
  {
    coordinator_id: "CORxx",
    name: "Namexx",
    nta: "NTAxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/profil/97-Ahmad%20Ridwan.jpeg",
    area_name: "Areaxx"
  },
  {
    coordinator_id: "CORxx",
    name: "Namexx",
    nta: "NTAxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/profil/751-Vera%20Silviani.jpeg",
    area_name: "Areaxx"
  }
]

export default function Dkc() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <SpeechLeader dataSpeechLeader={dataSpeechLeader} />
          </Grid>
          <Grid item md={12} xs={12}>
            <ProfileOfficer />
          </Grid>
          <Grid item md={12} xs={12}>
            <ProgramDkc />
          </Grid>
          <Grid item md={12} xs={12}>
            <AreaCoordinator dataAreaCoordinator={dataAreaCoordinator} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}