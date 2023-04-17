import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { ScoutDocument, Navbar, Footer } from '../components'
import { externalApi } from "./../utils/utils.js"

export default function Guide() {
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
      {console.log(dataScoutDocument)}
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <ScoutDocument dataScoutDocument={dataScoutDocument} />
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}