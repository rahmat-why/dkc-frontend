import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Container, Grid } from "@mui/material"
import { SpeechLeader, AreaCoordinator, ProfileOfficer, ProgramDkc, Navbar, Footer } from '../components'
import { externalApi } from "./../utils/utils.js"

export default function Dkc() {
  const [dataSpeechLeader, setSpeechLeader] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/speechs')
      .then(response => {
        setSpeechLeader(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataAreaCoordinator, setAreaCoordinator] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/area-coordinators')
      .then(response => {
        setAreaCoordinator(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataOfficer1, setDataOfficer1] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers/SC01')
      .then(response => {
        setDataOfficer1(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataOfficer2, setDataOfficer2] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers/SC02')
      .then(response => {
        setDataOfficer2(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataOfficer3, setDataOfficer3] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers/SC03')
      .then(response => {
        setDataOfficer3(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataOfficer4, setDataOfficer4] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers/SC04')
      .then(response => {
        setDataOfficer4(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataOfficer5, setDataOfficer5] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers/SC05')
      .then(response => {
        setDataOfficer5(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);  

  const [dataProgram2020, setDataProgram2020] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2020')
      .then(response => {
        setDataProgram2020(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProgram2021, setDataProgram2021] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2021')
      .then(response => {
        setDataProgram2021(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProgram2022, setDataProgram2022] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2022')
      .then(response => {
        setDataProgram2022(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProgram2023, setDataProgram2023] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2023')
      .then(response => {
        setDataProgram2023(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProgram2024, setDataProgram2024] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2024')
      .then(response => {
        setDataProgram2024(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [dataProgram2025, setDataProgram2025] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc/2025')
      .then(response => {
        setDataProgram2025(response.data.data);
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
            <SpeechLeader dataSpeechLeader={dataSpeechLeader} />
          </Grid>
          <Grid item md={12} xs={12}>
            <ProfileOfficer 
              dataOfficer1={dataOfficer1} 
              dataOfficer2={dataOfficer2} 
              dataOfficer3={dataOfficer3} 
              dataOfficer4={dataOfficer4}
              dataOfficer5={dataOfficer5}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <ProgramDkc 
              dataProgram2020={dataProgram2020}
              dataProgram2021={dataProgram2021}
              dataProgram2022={dataProgram2022}
              dataProgram2023={dataProgram2023}
              dataProgram2024={dataProgram2024}
              dataProgram2025={dataProgram2025}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <AreaCoordinator dataAreaCoordinator={dataAreaCoordinator} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}