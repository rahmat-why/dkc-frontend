import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { Visi, Misi, Achievement, PotensiSegment, Navbar, Footer } from "../components"
import { externalApi } from "./../utils/utils.js"

const dataPotensiSegment = [
  {
    segment: "Namexx",
    total_member: "100"
  },
  {
    segment: "Namexx",
    total_member: "100"
  }
]

export default function About() {
  const [dataVisi, setVisi] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/goals/visi')
      .then(response => {
        setVisi(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataMisi, setMisi] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/goals/misi')
      .then(response => {
        setMisi(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataAchievement, setAchievement] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/achievements')
      .then(response => {
        setAchievement(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Visi dataVisi={dataVisi} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Misi dataMisi={dataMisi} />
          </Grid>
          <Grid item md={12} xs={12}>
            <Achievement dataAchievement={dataAchievement} />
          </Grid>
          <Grid item md={12} xs={12}>
            <PotensiSegment dataPotensiSegment={dataPotensiSegment} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}
