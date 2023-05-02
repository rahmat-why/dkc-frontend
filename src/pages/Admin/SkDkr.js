import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, SkDkrAdmin } from "../../components"
import { RequireAuth } from "../../middlewares"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

function SkDkr() {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const [dataSkDkr, setSkDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/sk-dkr/'+dataLogin.data.dkr_id)
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

export default RequireAuth(SkDkr, "DKR");