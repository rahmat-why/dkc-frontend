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
  TextField,
  MenuItem
} from '@mui/material';
import ModalCreate from "./Agenda/ModalCreate"

export default function ProgramDkr(props) {
  const { dataProgramDkr } = props

  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({});

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(5), (val, index) => currentYear + index);
  const months = [1,2,3,4,5,6,7,8,9,10,11,12];

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!month) errors.month = 'Month is required';
    if (!year) errors.year = 'Year is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  }

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
                PROGRAM KERJA
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Program Kerja" type="UPLOAD">
                <TextField 
                  label="Name*" 
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
                
                <TextField
                  id="month"
                  label="Month*"
                  variant="outlined"
                  select
                  value={month}
                  onChange={handleChangeMonth}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {months.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="year"
                  label="Year*"
                  variant="outlined"
                  select
                  value={year}
                  onChange={handleYearChange}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </ModalCreate>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">No</TableCell>
                    <TableCell align="center">Kegiatan</TableCell>
                    <TableCell align="center">Bulan</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataProgramDkr.map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell align="center">{row.program_name}</TableCell>
                      <TableCell align="center">{row.month}-{row.year}</TableCell>
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