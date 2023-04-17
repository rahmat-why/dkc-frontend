import React from 'react'
import { Sidebar, SkDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"

export default function SkDkr() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="SK DKR" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <SkDkrAdmin />
        </Box>
      </Box>
    </div>
  )
}