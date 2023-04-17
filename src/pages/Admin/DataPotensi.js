import React from 'react'
import { Sidebar, DataPotensiAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataSchool = [
  {
    school_id: "PRGxx",
    school_name: "Namexx",
    gudep_number: "03"
  },
  {
    school_id: "PRGxx",
    school_name: "Namexx",
    gudep_number: "03"
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
              <DataPotensiAdmin dataSchool={dataSchool} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}