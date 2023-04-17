import React from 'react'
import { Sidebar, AgendaAdmin, LayerAdmin, MarketplaceAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"

const dataAgenda = [
  {
    agenda_id: "AGDxx",
    title: "Titlexx",
    schedule_date: "2022-03-26"
  },
  {
    agenda_id: "AGDxx",
    title: "Titlexx",
    schedule_date: "2022-03-26"
  }
]

const dataLayer = [
  {
    banner_id: "LYRXX",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/layer/497-DEWAN%20KERJA%20CABANG%20KABUPATEN%20BOGOR.png",
    type: "LAYER",
    label: "Label1"
  },
  {
    banner_id: "LYRXX",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/layer/64-DEWAN%20KERJA%20CABANG%20KABUPATEN%20BOGOR%20(2).png",
    type: "LAYER",
    label: "Label2"
  }
];

const dataProduct = [
  {
    product_id: "PRDxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/layer/64-DEWAN%20KERJA%20CABANG%20KABUPATEN%20BOGOR%20(2).png",
    name: "Namexx",
    link: "https://www.google.com"
  },
  {
    product_id: "PRDxx",
    image: "https://app.angel-ping.my.id/adm/dkc/adm/assets/file/layer/64-DEWAN%20KERJA%20CABANG%20KABUPATEN%20BOGOR%20(2).png",
    name: "Namexx",
    link: "https://www.google.com"
  }
]

export default function Home() {
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
              <AgendaAdmin dataAgenda={dataAgenda} />
            </Grid>
            <Grid item xs={12} md={6}>
              <MarketplaceAdmin dataProduct={dataProduct} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}