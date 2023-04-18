import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { StructureDkr, GpReport, SkDkr, ProgramDkr, DataPotensi, Navbar, Footer } from '../components'
import { useParams } from 'react-router-dom';
import { externalApi } from "./../utils/utils.js"

export default function DetailDkr() {
  let { dkr_id } = useParams();

  const [dataDetailDkr, setDataDetailDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/dkr/'+dkr_id)
      .then(response => {
        setDataDetailDkr(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataStructureDkr, setStructureDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/structures-dkr/'+dkr_id)
      .then(response => {
        setStructureDkr(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataSkDkr, setSkDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/sk-dkr/'+dkr_id)
      .then(response => {
        setSkDkr(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataProgramDkr, setProgramDkr] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/program-dkr/'+dkr_id)
      .then(response => {
        setProgramDkr(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataSchool, setSchool] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/schools/'+dkr_id)
      .then(response => {
        setSchool(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataGpReport1, setGpReport1] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/gp-reports/1/'+dkr_id)
      .then(response => {
        setGpReport1(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataGpReport2, setGpReport2] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/gp-reports/2/'+dkr_id)
      .then(response => {
        setGpReport2(response.data.data);
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
            <StructureDkr dataDetailDkr={dataDetailDkr} dataStructureDkr={dataStructureDkr} />
          </Grid>

          <Grid item md={12} xs={12}>
            <SkDkr dataSkDkr={dataSkDkr} />
          </Grid>

          <Grid item md={12} xs={12}>
            <ProgramDkr dataProgramDkr={dataProgramDkr} />
          </Grid>

          <Grid item md={12} xs={12}>
            <DataPotensi dataSchool={dataSchool} dkr_id={dkr_id} />
          </Grid>

          <Grid item md={12} xs={12}>
            <GpReport dataGpReport1={dataGpReport1} dataGpReport2={dataGpReport2} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}