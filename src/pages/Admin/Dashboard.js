import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Sidebar, Summary, PotensiTd } from "../../components"
import { externalApi } from '../../utils/utils';

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

export default function Dashboard() {
  const [dataPotensi, setDataPotensi] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/data-potensi/segment')
      .then(response => {
        var arr = [];
        for (let j = 0; j < response.data.length; j++) {
          var obj = {
            name: response.data[j].name,
            value: parseInt(response.data[j].value)
          }
          arr.push(obj)
        }
        setDataPotensi(arr)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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