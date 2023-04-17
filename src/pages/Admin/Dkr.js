import React from 'react'
import { Sidebar, AreaDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataAreaDkr = [
    {
        dkr_id: "DKRxx",
        name: "Namexx",
        area_name: "areaxx"
    },
    {
        dkr_id: "DKRxx",
        name: "Namexx",
        area_name: "areaxx"
    }
]

export default function Dkr() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="DKR" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <AreaDkrAdmin dataAreaDkr={dataAreaDkr} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}