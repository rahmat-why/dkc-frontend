import React, { useState } from 'react'
import axios from 'axios';
import { 
  Card, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Typography, 
  List, 
  Box, 
  TextField,
  MenuItem,
  Button
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi, config } from "./../../utils/utils.js"

export default function GpReport(props) {
  const { dataGpReport1, dataGpReport2 } = props

  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [year, setYear] = useState('');
  const [document, setDocument] = useState('');

  const handleFileChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(3), (val, index) => currentYear + index);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!year) errors.year = 'Year is required';
    if (!document) errors.document = 'Document is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('document', document)
    formData.append('year', year)
    formData.append('type', type)

    console.log(type)

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/gp-reports/DKR0.7388286687978849', formData, config())
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        window.alert("Terjadi kesalahan! data gagal ditambah!");
      }

      window.location.reload()
    }
  }

  const handleDelete = async (report_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/gp-reports/'+report_id, config())
      .then(response => window.alert("Data berhasil dihapus!"))
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));

      window.location.reload()
    }
  }

  return (
    <div>
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
                  LAPORAN 01 GP
                </Typography>
                <Box onClick={() => setType(1)}>
                  <ModalCreate handleSubmit={handleSubmit} title="Upload Laporan 01 GP" type="UPLOAD">
                    <TextField 
                      label="Nama Kegiatan*" 
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name : ''}
                    />

                    <TextField
                      label="Document*"
                      type="file"
                      variant="outlined"
                      fullWidth
                      onChange={handleFileChange}
                      error={!!errors.document}
                      helperText={errors.document ? errors.document : ''}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ mt: 3 }}
                    />

                    <TextField
                      id="year"
                      label="Year*"
                      variant="outlined"
                      select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
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
              </Box>
              
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nama Laporan</TableCell>
                    <TableCell align="left">Tahun Terbit</TableCell>
                    <TableCell align="left">File</TableCell>
                    <TableCell align="left">#</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataGpReport1.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.year}</TableCell>
                      <TableCell align="left">
                        <Button href={externalApi()+row.document} target="_blank">
                          Document
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <MenuTooltip style={{ marginLeft: 'auto' }}>
                          <MenuItem onClick={() => handleDelete(row.report_id)}>Delete</MenuItem>
                        </MenuTooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </List>
        </CardContent>
      </Card>
      
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
                  LAPORAN 02 GP
                </Typography>
                <Box onClick={() => setType(2)}>
                  <ModalCreate handleSubmit={handleSubmit} title="Upload Laporan 02 GP" type="UPLOAD">
                    <TextField 
                      label="Nama Kegiatan*" 
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name : ''}
                    />

                    <TextField
                      label="Document*"
                      type="file"
                      variant="outlined"
                      fullWidth
                      onChange={handleFileChange}
                      error={!!errors.document}
                      helperText={errors.document ? errors.document : ''}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ mt: 3 }}
                    />

                    <TextField
                      id="year"
                      label="Year*"
                      variant="outlined"
                      select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
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
              </Box>
              
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nama Laporan</TableCell>
                    <TableCell align="left">Tahun Terbit</TableCell>
                    <TableCell align="left">File</TableCell>
                    <TableCell align="left">#</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataGpReport2.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.year}</TableCell>
                      <TableCell align="left">
                        <Button href={externalApi()+row.document} target="_blank">
                          Document
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <MenuTooltip style={{ marginLeft: 'auto' }}>
                          <MenuItem onClick={() => handleDelete(row.report_id)}>Delete</MenuItem>
                        </MenuTooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}