import React, { useState } from 'react'
import axios from 'axios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Typography, 
  Card, 
  CardContent, 
  List, 
  Box, 
  TextField,
  Button,
  MenuItem,
  IconButton
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalPotensi from "./Agenda/ModalPotensi"
import ModalUpdate from "./Agenda/ModalUpdate"

import { externalApi, config } from "./../../utils/utils.js"
import { 
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';

export default function SkSaka(props) {
  const { dataSkSaka } = props

  const [name, setName] = useState('');
  const [document_sk_saka, setDocumentSkSaka] = useState('');
  const [document_sk_pinsaka, setDocumentSkPinsaka] = useState('');

  const handleSkSakaChange = (event) => {
    setDocumentSkSaka(event.target.files[0]);
  };

  const handleSkPinsakaChange = (event) => {
    setDocumentSkPinsaka(event.target.files[0]);
  };
  
  const [errors, setErrors] = useState({});

  const handleSubmitCreateSaka = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama SAKA harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formDataCreateSaka = new FormData();
    formDataCreateSaka.append('name', name);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/saka', formDataCreateSaka, config())
        .then(response => {
          window.alert("Data berhasil ditambah!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        window.alert("Terjadi kesalahan! data gagal ditambah!");
      }
    }
  }

  const handleDelete = async (saka_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/saka/'+saka_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));
    }
  }

  const [saka_id, setSakaId] = useState('');
  const [dataPotensiSaka, setDataPotensiSaka] = useState([]);
  const [formDataPotensiSaka, setFormDataPotensiSaka] = useState({
    saka_id: '',
    data: ''
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const viewDataPotensiSaka = async(saka_id) => {
    setSakaId(saka_id)

    await axios.get('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/data-potensi-saka/SAKAxx')
      .then(response => {
        setDataPotensiSaka(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    setOpen(true)
  }
  
  function handleChangeDataPotensiSaka(index, value) {
    console.log([index, value])

    const newDataPotensi = dataPotensiSaka.map((obj, ind) => {
      if (ind === index) {
        return { ...obj, total_member: value }; // create a copy of the object with updated key-value pair
      } else {
        return obj; // return the original object for other indices
      }
    });

    setDataPotensiSaka(newDataPotensi);
    setFormDataPotensiSaka({saka_id: saka_id, data: newDataPotensi})
  }

  const handleSubmitDataPotensiSaka = async (e) => {
    e.preventDefault()

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/api/data-potensi-saka/SAKAxx', formDataPotensiSaka, config())
        .then(response => {
          window.alert("Data potensi berhasil diupdate!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal diupdate!"));
    }
  }

  const handleSubmitUpdateSkSaka = async (e) => {
    e.preventDefault()
    
    // Validation
    const errors = {};
    if (!document_sk_saka) errors.document_sk_saka = 'SK SAKA harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formDataUpdataSkSaka = new FormData();
    formDataUpdataSkSaka.append('document_sk_saka', document_sk_saka);

    if (window.confirm("Apakah anda yakin ingin update SK SAKA?")) {
      axios.post('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/api/data-potensi-saka/SAKAxx', formDataPotensiSaka, config())
        .then(response => {
          window.alert("Data potensi berhasil diupdate!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal diupdate!"));
    }
  }

  const handleSubmitUpdateSkPinsaka = async (e) => {
    e.preventDefault()

    // Validation
    const errors = {};
    if (!document_sk_pinsaka) errors.document_sk_pinsaka = 'SK PINSAKA harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formDataUpdataSkPinsaka = new FormData();
    formDataUpdataSkPinsaka.append('document_sk_pinsaka', document_sk_pinsaka);

    if (window.confirm("Apakah anda yakin ingin update SK PINSAKA?")) {
      axios.post('https://721560dc-910b-4ecd-adfd-701bdc60a99c.mock.pstmn.io/api/api/data-potensi-saka/SAKAxx', formDataPotensiSaka, config())
        .then(response => {
          window.alert("Data potensi berhasil diupdate!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal diupdate!"));
    }
  }

  const [openSkSaka, setOpenSkSaka] = useState(false);
  const handleOpenSkSaka = (saka_id, name) => {
    setOpenSkSaka(true);
    setSakaId(saka_id);
    setName(name);
  };
  const handleCloseSkSaka = () => {
    setOpenSkSaka(false);
  };

  const [openSkPinsaka, setOpenSkPinsaka] = useState(false);
  const handleOpenSkPinsaka = (saka_id, name) => {
    setOpenSkPinsaka(true);
    setSakaId(saka_id);
    setName(name);
  };
  const handleCloseSkPinsaka = () => {
    setOpenSkPinsaka(false);
  };

  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, pl: 2, pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography 
                gutterBottom 
                align="center" 
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ marginTop: '20px' }}
              >
                SK & DATA POTENSI SAKA
              </Typography>
              <ModalCreate handleSubmit={handleSubmitCreateSaka} title="Tambah SAKA" type="ADD">
                <TextField
                  label="Nama SAKA*"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
              </ModalCreate>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama SAKA</TableCell>
                  <TableCell align="left">SK SAKA</TableCell>
                  <TableCell align="left">SK PINSAKA</TableCell>
                  <TableCell align="left">Total Anggota</TableCell>
                  <TableCell align="left">#</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSkSaka.map((row) => (
                  <TableRow
                    key={row.saka_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button href={externalApi()+row.document_sk_saka} target="_blank">
                        DOCUMENT
                      </Button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button href={externalApi()+row.document_sk_pinsaka} target="_blank">
                        DOCUMENT
                      </Button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <Button sx={{ height: '35px', backgroundColor: '#4040A1' }} variant="contained" onClick={() => viewDataPotensiSaka(row.saka_id)}>
                          <IconButton>
                            <CloudUploadIcon fontSize='small' sx={{ color: "#fff" }} />
                          </IconButton>
                          Upload
                        </Button>
                        <ModalPotensi handleClose={handleClose} open={open} handleSubmit={handleSubmitDataPotensiSaka} title="Update Data Potensi SAKA" type="UPDATE">
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell align="left">Kwaran</TableCell>
                                <TableCell align="left">Total Anggota (PA)</TableCell>
                                <TableCell align="left">Total Anggota (PI)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {dataPotensiSaka.map((row, index) => (
                                <TableRow
                                  key={row.data_id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.saka_id}
                                  </TableCell>
                                  <TableCell align="left">
                                    <TextField 
                                      label="Total Anggota (PA)*" 
                                      variant="outlined"
                                      fullWidth
                                      defaultValue={dataPotensiSaka[index].mens_member}
                                      onChange={(e) => handleChangeDataPotensiSaka(index, e.target.value)}
                                    />
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                    <TextField 
                                      label="Total Anggota (PI)*" 
                                      variant="outlined"
                                      fullWidth
                                      defaultValue={dataPotensiSaka[index].womens_member}
                                      onChange={(e) => handleChangeDataPotensiSaka(index, e.target.value)}
                                    />
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </ModalPotensi>
                    </TableCell>
                    <TableCell>
                      <MenuTooltip>
                        <MenuItem onClick={() => handleDelete(row.saka_id)}>Delete</MenuItem>
                        <MenuItem onClick={() => handleOpenSkSaka(row.saka_id, row.name)}>Update SK SAKA</MenuItem>
                        <MenuItem onClick={() => handleOpenSkPinsaka(row.saka_id, row.name)}>Update SK PINSAKA</MenuItem>
                      </MenuTooltip>
                    </TableCell>
                    <ModalUpdate handleSubmit={handleSubmitUpdateSkSaka} open={openSkSaka} title={`Update SK SAKA ${name}`} handleClose={handleCloseSkSaka}>
                      <TextField
                        label="Document SK SAKA*"
                        type="file"
                        variant="outlined"
                        fullWidth
                        onChange={handleSkSakaChange}
                        error={!!errors.document_sk_saka}
                        helperText={errors.document_sk_saka ? errors.document_sk_saka : ''}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </ModalUpdate>

                    <ModalUpdate handleSubmit={handleSubmitUpdateSkPinsaka} open={openSkPinsaka} title={`Update SK PINSAKA ${name}`} handleClose={handleCloseSkPinsaka}>
                      <TextField
                        label="Document SK PINSAKA*"
                        type="file"
                        variant="outlined"
                        fullWidth
                        onChange={handleSkPinsakaChange}
                        error={!!errors.document_sk_pinsaka}
                        helperText={errors.document_sk_pinsaka ? errors.document_sk_pinsaka : ''}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </ModalUpdate>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}