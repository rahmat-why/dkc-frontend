import React from 'react'
import { Sidebar, GpReportAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"

const dataGpReport1 = [
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2022"
  },
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2022"
  }
]

const dataGpReport2 = [
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2023"
  },
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2023"
  }
]

export default function SkDkr() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Laporan GP"/>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <GpReportAdmin dataGpReport1={dataGpReport1} dataGpReport2={dataGpReport2} />
        </Box>
      </Box>
    </div>
  )
}