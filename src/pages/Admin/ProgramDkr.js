import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, ProgramDkrAdmin } from "../../components"
import { RequireAuth } from "../../middlewares"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

function ProgramDkr() {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const [dataProgramDkr, setDataProgramDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/program-dkr/'+dataLogin.data.dkr_id)
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

export default RequireAuth(ProgramDkr, "DKR");