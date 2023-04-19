import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, DataPotensiAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

import { externalApi, config } from "./../../utils/utils.js"

export default function Dkr() {
  const [dataSchool, setSchool] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/schools/DKR0.7388286687978849')
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