import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, SkDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

export default function SkDkr() {
  const [dataSkDkr, setSkDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/sk-dkr/DKR0.7388286687978849')
      .then(response => {
        setSkDkr(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="SK DKR" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <SkDkrAdmin dataSkDkr={dataSkDkr} />
        </Box>
      </Box>
    </div>
  )
}