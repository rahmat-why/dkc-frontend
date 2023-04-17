import React from 'react'
import { Container, Grid } from "@mui/material"
import { StructureDkr, GpReport, SkDkr, ProgramDkr, DataPotensi, Navbar, Footer } from '../components'
import { useParams } from 'react-router-dom';

const dataGpReport1 = [
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2022"
  },
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2022"
  }
]

const dataGpReport2 = [
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2023"
  },
  {
    report_id: "GPxx",
    name: "Namexx",
    document: "http://xx",
    dkr_id: "DKRxx",
    type: "1",
    year: "2023"
  }
]

const dataProgramDkr = [
  {
    program_id: "PRGxx",
    program_name: "Namexx",
    month: "03",
    year: "2022"
  },
  {
    program_id: "PRGxx",
    program_name: "Namexx",
    month: "03",
    year: "2022"
  }
]

const dataSchool = [
  {
    school_id: "PRGxx",
    school_name: "Namexx",
    gudep_number: "03"
  },
  {
    school_id: "PRGxx",
    school_name: "Namexx",
    gudep_number: "03"
  }
]

export default function DetailDkr() {
  let { dkr_id } = useParams();
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <StructureDkr dkr_id={dkr_id} />
          </Grid>

          <Grid item md={12} xs={12}>
            <SkDkr />
          </Grid>

          <Grid item md={12} xs={12}>
            <ProgramDkr dataProgramDkr={dataProgramDkr} />
          </Grid>

          <Grid item md={12} xs={12}>
            <DataPotensi dataSchool={dataSchool} />
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