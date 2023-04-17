import React from 'react'
import { Sidebar, ScoutDocumentAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataScoutDocument = [
  {
    document_id: "DKRxx",
    name: "Namexx",
    document: "areaxx"
  },
  {
    document_id: "DKRxx",
    name: "Namexx",
    document: "areaxx"
  }
]

export default function Guide() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Pedoman" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <ScoutDocumentAdmin dataScoutDocument={dataScoutDocument} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}