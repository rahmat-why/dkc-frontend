import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { AreaDkr, Navbar, Footer } from '../components'
import { externalApi } from "./../utils/utils.js"

export default function Dkr() {
  const [dataDkr1, setDataDkr1] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/area/WIL01')
      .then(response => {
        setDataDkr1(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataDkr2, setDataDkr2] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/area/WIL02')
      .then(response => {
        setDataDkr2(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataDkr3, setDataDkr3] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/area/WIL03')
      .then(response => {
        setDataDkr3(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataDkr4, setDataDkr4] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/area/WIL04')
      .then(response => {
        setDataDkr4(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataDkr5, setDataDkr5] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/area/WIL05')
      .then(response => {
        setDataDkr5(response.data.data);
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
            <AreaDkr 
              dataDkr1={dataDkr1}
              dataDkr2={dataDkr2}
              dataDkr3={dataDkr3}
              dataDkr4={dataDkr4}
              dataDkr5={dataDkr5}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}