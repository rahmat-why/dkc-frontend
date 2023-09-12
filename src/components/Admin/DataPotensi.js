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
  MenuItem,
  IconButton,
  Button
} from '@mui/material';
  
import ModalCreate from "./Agenda/ModalCreate"
import ModalPotensi from "./Agenda/ModalPotensi"
import MenuTooltip from "./Agenda/MenuTooltip"

import { 
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';

import { externalApi, config } from "./../../utils/utils.js"

export default function DataPotensi(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const  { dataSchool } = props

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    gudep_number: '',
    school_name: ''
  });

  const [formDataPotensi, setFormDataPotensi] = useState({
    school_id: '',
    data: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitSchool = async (e) => {
    e.preventDefault()

    // Validation
    const errors = {};
    if (!formData.gudep_number) errors.gudep_number = 'No. Gudep is required';
    if (!formData.school_name) errors.school_name = 'Name is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/schools/'+dataLogin.data.dkr_id, formData, config())
        .then(response => {
          window.alert("Data berhasil ditambah!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    }
  }

  const handleDelete = async (school_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/schools/'+school_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));
    }
  }

  const handleSubmitDataPotensi = async (e) => {
    e.preventDefault()

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/data-potensi/'+dataLogin.data.dkr_id, formDataPotensi, config())
        .then(response => {
          window.alert("Data potensi berhasil diupdate!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal diupdate!"));
    }
  }

  const [school_id, setSchoolId] = useState('');
  const [dataPotensi, setDataPotensi] = useState([]);

  const viewDataPotensi = async(school_id) => {
    setSchoolId(school_id)
    await axios.get(externalApi()+'/api/data-potensi/'+school_id+'/'+dataLogin.data.dkr_id)
      .then(response => {
        setDataPotensi(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setOpen(true)
  }

  function handleChangeMensMember(index, value) {
    console.log([index, value])

    const newDataPotensi = dataPotensi.map((obj, ind) => {
      if (ind === index) {
        return { ...obj, mens_member: value }; // create a copy of the object with updated key-value pair
      } else {
        return obj; // return the original object for other indices
      }
    });

    setDataPotensi(newDataPotensi);
    setFormDataPotensi({school_id: school_id, data: newDataPotensi})
    console.log(formDataPotensi)
  }

  function handleChangeWomensMember(index, value) {
    console.log([index, value])

    const newDataPotensi = dataPotensi.map((obj, ind) => {
      if (ind === index) {
        return { ...obj, womens_member: value }; // create a copy of the object with updated key-value pair
      } else {
        return obj; // return the original object for other indices
      }
    });

    setDataPotensi(newDataPotensi);
    setFormDataPotensi({school_id: school_id, data: newDataPotensi})
  }

  console.log(dataPotensi)

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
              <ModalCreate handleSubmit={handleSubmitSchool} title="Tambah Sanggar Bakti" type="ADD">
                <TextField 
                  label="No. Gudep*" 
                  variant="outlined"
                  name="gudep_number"
                  fullWidth
                  value={formData.gudep_number}
                  onChange={handleInputChange}
                  error={!!errors.gudep_number}
                  helperText={errors.gudep_number ? errors.gudep_number : ''}
                />

                <TextField 
                  label="Sanggar Bakti*" 
                  variant="outlined"
                  name="school_name"
                  fullWidth
                  value={formData.school_name}
                  onChange={handleInputChange}
                  error={!!errors.school_name}
                  helperText={errors.school_name ? errors.school_name : ''}
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
                    <TableCell>#</TableCell>
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
                        <Button sx={{ height: '35px', backgroundColor: '#4040A1' }} variant="contained" onClick={() => viewDataPotensi(row.school_id)}>
                          <IconButton>
                            <CloudUploadIcon fontSize='small' sx={{ color: "#fff" }} />
                          </IconButton>
                          Upload
                        </Button>
                        <ModalPotensi handleClose={handleClose} open={open} handleSubmit={handleSubmitDataPotensi} title="Update Data Potensi" type="UPDATE">
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell align="left">Tingkat</TableCell>
                                <TableCell align="left">Total Anggota (PA)</TableCell>
                                <TableCell align="left">Total Anggota (PI)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {dataPotensi.map((row, index) => (
                                <TableRow
                                  key={row.data_id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.stage_name}
                                  </TableCell>
                                  <TableCell align="left">
                                    <TextField 
                                      label="Putra*" 
                                      variant="outlined"
                                      fullWidth
                                      defaultValue={dataPotensi[index].mens_member}
                                      onChange={(e) => handleChangeMensMember(index, e.target.value)}
                                    />
                                  </TableCell>
                                  <TableCell align="left">
                                    <TextField 
                                      label="Putri*" 
                                      variant="outlined"
                                      fullWidth
                                      defaultValue={dataPotensi[index].womens_member}
                                      onChange={(e) => handleChangeWomensMember(index, e.target.value)}
                                    />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </ModalPotensi>
                      </TableCell>
                      <TableCell>
                        <MenuTooltip style={{ marginLeft: 'auto' }}>
                          <MenuItem onClick={() => handleDelete(row.school_id)}>Delete</MenuItem>
                        </MenuTooltip>
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