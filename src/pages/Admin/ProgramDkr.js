import React from 'react'
import { Sidebar, ProgramDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"

const dataProgramDkr = [
  {
    program_id: "PRGxx",
    program_name: "Namexx",
    month: "03",
    year: "2022"
  },
  {
    program_id: "PRGxx",
    program_name: "Namexx",
    month: "03",
    year: "2022"
  }
]

export default function SkDkr() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Program Kerja"/>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <ProgramDkrAdmin dataProgramDkr={dataProgramDkr} />
        </Box>
      </Box>
    </div>
  )
}