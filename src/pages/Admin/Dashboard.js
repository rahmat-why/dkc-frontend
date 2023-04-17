import React from 'react'
import { Sidebar, Summary, PotensiTd } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataPotensi = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
];

export default function Dashboard() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Dashboard"/>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Summary />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PotensiTd dataPotensi={dataPotensi} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}