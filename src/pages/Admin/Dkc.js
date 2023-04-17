import React from 'react'
import { Sidebar, SpeechLeaderAdmin, ProfileOfficerAdmin, AreaCoordinatorAdmin,ProgramDkcAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataSpeechLeader = {
  speech_id: "SPCxx",
  name: "Namexx",
  nta: "NTAxx",
  image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/visimisi/194-visi.jpg",
  description: "Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from"
}

const dataProfileOfficer = [
  {
    officer_id: "OFCxx",
    name: "Namexx",
    nta: "NTAxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/profil/97-Ahmad%20Ridwan.jpeg",
    stage_name: "Stagexx",
    scope_name: "Scopexx",
    education: "Univxx",
    city: "Cityxx",
    instagram: "http://xx",
    facebook: "http://xx"
  },
  {
    officer_id: "OFCxx",
    name: "Namexx",
    nta: "NTAxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/profil/97-Ahmad%20Ridwan.jpeg",
    stage_name: "Stagexx",
    scope_name: "Scopexx",
    education: "Univxx",
    city: "Cityxx",
    instagram: "http://xx",
    facebook: "http://xx"
  }
]

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

const dataProgramDkc = [
  {
    agenda_id: "AGDxx",
    title: "Titlexx",
    schedule_date: "2022-03-26"
  },
  {
    agenda_id: "AGDxx",
    title: "Titlexx",
    schedule_date: "2022-03-26"
  }
]

export default function Dkc() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="DKC" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <SpeechLeaderAdmin dataSpeechLeader={dataSpeechLeader} />
            </Grid>

            <Grid item xs={12} md={12}>
              <ProfileOfficerAdmin dataProfileOfficer={dataProfileOfficer} />
            </Grid>

            <Grid item xs={12} md={12}>
              <ProgramDkcAdmin dataProgramDkc={dataProgramDkc} />
            </Grid>

            <Grid item xs={12} md={12}>
              <AreaCoordinatorAdmin dataAreaCoordinator={dataAreaCoordinator} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}