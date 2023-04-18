import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, AreaDkrAdmin } from "../../components"
import { externalApi } from "./../../utils/utils.js"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const areas = [
  {
    area_id: "WIL01",
    name: "Wilayah 1"
  },
  {
    area_id: "WIL02",
    name: "Wilayah 2"
  },
  {
    area_id: "WIL03",
    name: "Wilayah 3"
  },
  {
    area_id: "WIL04",
    name: "Wilayah 4"
  },
  {
    area_id: "WIL05",
    name: "Wilayah 5"
  }
]

export default function Dkr() {
  const [dataAreaDkr, setAreaDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr')
      .then(response => {
        setAreaDkr(response.data.data);
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
              <AreaDkrAdmin dataAreaDkr={dataAreaDkr} areas={areas} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}