import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Sidebar, SpeechLeaderAdmin, ProfileOfficerAdmin, AreaCoordinatorAdmin,ProgramDkcAdmin } from "../../components"

import { 
  Box, 
  Toolbar,
  Grid
} from "@mui/material"
import { externalApi } from "./../../utils/utils.js"

const dataStage = [
  {
    stage_id: "STG01",
    name: "Calon Penegak"
  },
  {
    stage_id: "STG02",
    name: "Penegak Bantara"
  },
  {
    stage_id: "STG03",
    name: "Penegak Laksana"
  },
  {
    stage_id: "STG04",
    name: "Penegak Garuda"
  },
  {
    stage_id: "STG05",
    name: "Calon Pandega"
  },
  {
    stage_id: "STG06",
    name: "Pandega"
  },
  {
    stage_id: "STG07",
    name: "Pandega Garuda"
  }
]

const dataScope = [
  {
    scope_id: "SC01",
    name: "Unsur Pimpinan"
  },
  {
    scope_id: "SC02",
    name: "Bid. Kajian Kepramukaan"
  },
  {
    scope_id: "SC03",
    name: "Bid. Kegiatan"
  },
  {
    scope_id: "SC04",
    name: "Bid. Pembinaan dan Pengembangan"
  },
  {
    scope_id: "SC05",
    name: "Bid. Penelitian dan Evaluasi"
  }
]

const areas = [
  {
    area_id: "WIL01",
    name: "Wilayah 1"
  },
  {
    area_id: "WIL02",
    name: "Wilayah 2"
  },
  {
    area_id: "WIL03",
    name: "Wilayah 3"
  },
  {
    area_id: "WIL04",
    name: "Wilayah 4"
  },
  {
    area_id: "WIL05",
    name: "Wilayah 5"
  }
]

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
  
  const [dataProfileOfficer, setProfileOfficer] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/officers')
      .then(response => {
        setProfileOfficer(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const [dataProgramDkc, setProgramDkc] = useState([]);
  useEffect(() => {
    axios.get(externalApi()+'/api/programs-dkc')
      .then(response => {
        setProgramDkc(response.data.data);
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

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar page="DKC" />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <SpeechLeaderAdmin dataSpeechLeader={dataSpeechLeader} />
            </Grid>

            <Grid item xs={12} md={12}>
              <ProfileOfficerAdmin dataProfileOfficer={dataProfileOfficer} dataStage={dataStage} dataScope={dataScope} />
            </Grid>

            <Grid item xs={12} md={12}>
              <ProgramDkcAdmin dataProgramDkc={dataProgramDkc} />
            </Grid>

            <Grid item xs={12} md={12}>
              <AreaCoordinatorAdmin dataAreaCoordinator={dataAreaCoordinator} areas={areas} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}