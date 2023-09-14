import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ReportSakaAdmin, Sidebar, SkSakaAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"
import { externalApi } from "../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

function Saka() {
  const [dataSkSaka, setSkSaka] = useState([]);
  const [dataReportSaka, setReportSaka] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/saka')
      .then(response => {
        setSkSaka(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    axios.get(externalApi()+'/api/report-saka')
      .then(response => {
        setReportSaka(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Satuan Karya (SAKA)" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <SkSakaAdmin dataSkSaka={dataSkSaka} />
            </Grid>
            <Grid item xs={12} md={12}>
              <ReportSakaAdmin dataReportSaka={dataReportSaka} dataSkSaka={dataSkSaka} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(Saka, "DKC");