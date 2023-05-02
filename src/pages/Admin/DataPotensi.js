import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, DataPotensiAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

import { externalApi } from "./../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

function DataPotensi() {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const [dataSchool, setSchool] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/schools/'+dataLogin.data.dkr_id)
      .then(response => {
        setSchool(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="DKR" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <DataPotensiAdmin dataSchool={dataSchool} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(DataPotensi, "DKR");