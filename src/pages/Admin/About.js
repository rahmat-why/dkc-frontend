import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, VisiAdmin, MisiAdmin, AchievementAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

function Home() {
  const [dataVisi, setVisi] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/goals/visi')
      .then(response => {
        setVisi(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataMisi, setMisi] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/goals/misi')
      .then(response => {
        setMisi(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataAchievement, setAchievement] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/achievements')
      .then(response => {
        setAchievement(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Tentang" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <VisiAdmin dataVisi={dataVisi} />
            </Grid>

            <Grid item xs={12} md={12}>
              <MisiAdmin dataMisi={dataMisi} />
            </Grid>
            
            <Grid item xs={12} md={12}>
              <AchievementAdmin dataAchievement={dataAchievement} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(Home, "DKC");