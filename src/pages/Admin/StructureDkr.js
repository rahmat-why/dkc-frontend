import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, StructureDkrAdmin } from "../../components"
import { RequireAuth } from "../../middlewares"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"
import { Redirect } from 'react-router-dom';

function StructureDkr() {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      axios.get(externalApi()+'/api/check-login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        if(response.data.type !== "DKR") {
          return <Redirect to="/login" />;
        }
      })
      .catch(error => {
        return <Redirect to="/login" />;
      });
    }else{
      return <Redirect to="/login" />;
    }
  }, []);

  const [dataStructureDkr, setStructureDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/structures-dkr/'+dataLogin.data.dkr_id)
      .then(response => {
        setStructureDkr(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="STRUKTUR ORGANISASI" />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >

          <Toolbar />
          
          <StructureDkrAdmin dataStructureDkr={dataStructureDkr} />
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(StructureDkr, "DKR");