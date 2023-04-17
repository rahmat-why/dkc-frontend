import React from 'react'
import { Sidebar, StructureDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"

export default function Dashboard() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="STRUKTUR ORGANISASI" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <StructureDkrAdmin />
        </Box>
      </Box>
    </div>
  )
}