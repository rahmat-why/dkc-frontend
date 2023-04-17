import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { Layer, PotensiTd, Agenda, Marketplace, Navbar, Footer } from "../components"
import { externalApi } from "./../utils/utils.js"

const dataPotensi = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
];

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
