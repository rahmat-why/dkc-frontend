import React, { useState } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Card, 
  CardContent, 
  Typography,
  List,
  Box,
  TextField
} from '@mui/material';
  
import ModalCreate from "./Agenda/ModalCreate"

export default function DataPotensi(props) {
  const  { dataSchool } = props

  const [gudep_number, setGudepNumber] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!gudep_number) errors.gudep_number = 'No. Gudep is required';
    if (!name) errors.name = 'Name is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  }

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
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2, pr: 2 }}>
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
              <ModalCreate handleSubmit={handleSubmit} title="Tambah Sanggar Bakti" type="ADD">
              <TextField 
                label="No. Gudep*" 
                variant="outlined"
                fullWidth
                value={gudep_number}
                onChange={(e) => setGudepNumber(e.target.value)}
                error={!!errors.gudep_number}
                helperText={errors.gudep_number ? errors.gudep_number : ''}
              />

              <TextField 
                label="Sanggar Bakti*" 
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name ? errors.name : ''}
                sx={{ mt: 3 }}
              />
            </ModalCreate>
            </Box>
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
                        <ModalCreate handleSubmit={handleSubmit} title="Update Data Potensi" type="UPDATE">
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
                                  <TableCell align="left">
                                    <TextField 
                                      label="Total Anggota*" 
                                      variant="outlined"
                                      fullWidth
                                      value={row.total_member}
                                    />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </ModalCreate>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}