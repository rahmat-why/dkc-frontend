import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, ProgramDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

export default function SkDkr() {
  const [dataProgramDkr, setDataProgramDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/program-dkr/DKR0.7388286687978849')
      .then(response => {
        setDataProgramDkr(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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