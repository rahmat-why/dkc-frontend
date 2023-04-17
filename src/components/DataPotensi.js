import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Card, 
  CardContent, 
  Container, 
  Typography
} from '@mui/material';

import ModalView from "./Admin/Agenda/ModalView"

export default function DataPotensi(props) {
  const  { dataSchool } = props

  const dataPotensi = [
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    },
    {
      data_id: "DPxx",
      school_name: "Namexx",
      gudep_number: "Numberxx",
      stage_name: "Stagexx",
      total_member: "100",
      dkr_id: "DKRxx",
      year: "2022"
    }
  ]

  return (
    <Card sx={{ mt: 1, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Container maxWidth="md">
          <Typography 
            gutterBottom 
            align="center" 
            variant="h6" 
            component="div" 
            fontWeight="bold"
            sx={{ marginTop: '20px' }}
          >
            DATA POTENSI
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">No. Gudep</TableCell>
                  <TableCell align="center">Sanggar Bakti</TableCell>
                  <TableCell align="center">Total Anggota</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSchool.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.gudep_number}
                    </TableCell>
                    <TableCell align="center">{row.school_name}</TableCell>
                    <TableCell align="center">
                      {/* View */}
                      <ModalView title="Data Potensi SMA">
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="left">Tingkat</TableCell>
                              <TableCell align="left">Total Anggota</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataPotensi.map((row) => (
                              <TableRow
                                key={row.data_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.stage_name}
                                </TableCell>
                                <TableCell align="left">{row.total_member}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ModalView>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </CardContent>
    </Card>
  );
}