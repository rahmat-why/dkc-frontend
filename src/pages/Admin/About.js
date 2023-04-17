import React from 'react'
import { Sidebar, VisiAdmin, MisiAdmin, AchievementAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

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

export default function Home() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Tentang" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <VisiAdmin dataVisi={dataVisi} />
            </Grid>

            <Grid item xs={12} md={12}>
              <MisiAdmin dataMisi={dataMisi} />
            </Grid>
            
            <Grid item xs={12} md={12}>
              <AchievementAdmin dataAchievement={dataAchievement} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}