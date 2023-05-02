import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, AgendaAdmin, LayerAdmin, MarketplaceAdmin } from "../../components"
import { externalApi } from "./../../utils/utils.js"
import { RequireAuth } from "../../middlewares"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

function Home() {
  const [dataAgenda, setAgenda] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/agendas')
      .then(response => {
        setAgenda(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataLayer, setLayer] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/banners')
      .then(response => {
        setLayer(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProduct, setProduct] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/products')
      .then(response => {
        setProduct(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="Beranda" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <LayerAdmin dataLayer={dataLayer} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} md={12}>
                <AgendaAdmin dataAgenda={dataAgenda} />
              </Grid>
              <Grid item xs={12} md={12}>
                <MarketplaceAdmin dataProduct={dataProduct} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RequireAuth(Home, "DKC");