import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, ScoutDocumentAdmin } from "../../components"
import { externalApi } from "./../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

function Guide() {
  const [dataScoutDocument, setScoutDocument] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/scout-documents')
      .then(response => {
        setScoutDocument(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Pedoman" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <ScoutDocumentAdmin dataScoutDocument={dataScoutDocument} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(Guide, "DKC");