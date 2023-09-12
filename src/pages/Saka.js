import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { Navbar, Footer, SkSaka, ReportSaka } from '../components'
import { externalApi } from "./../utils/utils.js"

export default function Saka() {
  const [dataSkSaka, setSkSaka] = useState([]);
  const [dataReportSaka, setReportSaka] = useState([]);

  useEffect(() => {
    axios.get('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/saka')
      .then(response => {
        setSkSaka(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    axios.get('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/report-saka')
      .then(response => {
        setReportSaka(response.data.data);
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
          <SkSaka dataSkSaka={dataSkSaka} />
        </Grid>

        <Grid container spacing={2}>
          <ReportSaka dataReportSaka={dataReportSaka} />
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}