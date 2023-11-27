import React, { useState } from 'react'
import axios from 'axios';
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
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
import { externalApi, config } from "./../../utils/utils.js"

export default function ProgramDkr(props) {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const { dataProgramDkr } = props

  const [formData, setFormData] = useState({
    program_name: '',
    month: '',
    year: ''
  });
  const [errors, setErrors] = useState({});

  const [program_id, setProgramId] = useState('');

  const fixedYears = [2020, 2021, 2022];
  const currentYear = new Date().getFullYear();
  const rangeOfYears = Array.from(new Array(3), (val, index) => currentYear + index);

  const years = [...fixedYears, ...rangeOfYears];
  const months = [1,2,3,4,5,6,7,8,9,10,11,12];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.program_name) errors.program_name = 'Program name is required';
    if (!formData.month) errors.month = 'Month is required';
    if (!formData.year) errors.year = 'Year is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/program-dkr/'+dataLogin.data.dkr_id, formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const handleDelete = async (program_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/program-dkr/'+program_id, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const [open, setOpen] = useState(false);
  const handleUpdate = async (program) => {
    setOpen(true);
    setProgramId(program.program_id)
    setFormData({ program_name: program.program_name,month : program.month, year: program.year })
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.program_name) errors.program_name = 'Nama program harus diisi';
    if (!formData.month) errors.month = 'Bulan program harus diisi';
    if (!formData.year) errors.year = 'Tahun program harus diisi';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/program-dkr/'+program_id, formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
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
                  name="program_name"
                  fullWidth
                  value={formData.program_name}
                  onChange={handleInputChange}
                  error={!!errors.program_name}
                  helperText={errors.program_name ? errors.program_name : ''}
                />
                
                <TextField
                  id="month"
                  label="Month*"
                  variant="outlined"
                  name="month"
                  select
                  value={formData.month}
                  onChange={handleInputChange}
                  error={!!errors.month}
                  helperText={errors.month ? errors.month : ''}
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
                  name="year"
                  variant="outlined"
                  select
                  value={formData.year}
                  onChange={handleInputChange}
                  error={!!errors.year}
                  helperText={errors.year ? errors.year : ''}
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
                    <TableCell align="center">#</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataProgramDkr.map((row, index) => (
                    <TableRow
                      key={row.program_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell align="center">{row.program_name}</TableCell>
                      <TableCell align="center">{row.month}-{row.year}</TableCell>
                      <TableCell align="center">
                        <MenuTooltip style={{ marginLeft: 'auto' }}>
                          <MenuItem onClick={() => handleUpdate(row)}>Update</MenuItem>
                          <MenuItem onClick={() => handleDelete(row.program_id)}>Delete</MenuItem>
                        </MenuTooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update Program DKR" handleClose={handleClose}>
                <TextField 
                  label="Name*" 
                  variant="outlined"
                  name="program_name"
                  fullWidth
                  value={formData.program_name}
                  onChange={handleInputChange}
                  error={!!errors.program_name}
                  helperText={errors.program_name ? errors.program_name : ''}
                />

                <TextField
                  id="month"
                  label="Month*"
                  variant="outlined"
                  name="month"
                  select
                  value={formData.month}
                  onChange={handleInputChange}
                  error={!!errors.month}
                  helperText={errors.month ? errors.month : ''}
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
                  name="year"
                  variant="outlined"
                  select
                  value={formData.year}
                  onChange={handleInputChange}
                  error={!!errors.year}
                  helperText={errors.year ? errors.year : ''}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </ModalUpdate>
            </TableContainer>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}