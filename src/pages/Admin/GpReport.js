import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, GpReportAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

function SkDkr() {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const [dataGpReport1, setDataGpReport1] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/gp-reports/1/'+dataLogin.data.dkr_id)
      .then(response => {
        setDataGpReport1(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataGpReport2, setDataGpReport2] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/gp-reports/2/'+dataLogin.data.dkr_id)
      .then(response => {
        setDataGpReport2(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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

export default RequireAuth(SkDkr, "DKR");