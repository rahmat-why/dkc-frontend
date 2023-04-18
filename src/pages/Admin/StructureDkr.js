import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, StructureDkrAdmin } from "../../components"

import { 
  Box, 
  Toolbar
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

export default function Dashboard() {
  const [dataStructureDkr, setStructureDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/structures-dkr/DKR0.7388286687978849')
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