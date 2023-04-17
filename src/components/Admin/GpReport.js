import React, { useState } from 'react'
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

export default function GpReport(props) {
  const { dataGpReport1, dataGpReport2 } = props

  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [year, setYear] = useState('');
  const [document, setDocument] = useState('');

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(5), (val, index) => currentYear + index);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

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
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
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
              
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nama Laporan</TableCell>
                    <TableCell align="left">Tahun Terbit</TableCell>
                    <TableCell align="left">File</TableCell>
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
                        <Button href={row.document} target="_blank">
                          Document
                        </Button>
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
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
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
              
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nama Laporan</TableCell>
                    <TableCell align="left">Tahun Terbit</TableCell>
                    <TableCell align="left">File</TableCell>
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
                        <Button href={row.document} target="_blank">
                          Document
                        </Button>
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