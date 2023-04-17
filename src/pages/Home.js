import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { Layer, PotensiTd, Agenda, Marketplace, Navbar, Footer } from "../components"

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

const dataPotensi = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
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

function Home() {
  const [dataAgenda, setAgenda] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:8080/api/agendas')
      .then(response => {
        setAgenda(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
      <Navbar />
      <Layer dataLayer={dataLayer} />

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <PotensiTd dataPotensi={dataPotensi} />
          </Grid>
          {console.log(dataAgenda)}
          <Grid item md={4} xs={12}>
            <Agenda dataAgenda={dataAgenda} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Marketplace dataProduct={dataProduct} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
