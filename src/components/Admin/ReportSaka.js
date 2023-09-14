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
  MenuItem
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"

import { externalApi, config } from "./../../utils/utils.js"
import { formatDate } from '../../utils/utils';

export default function ReportSaka(props) {
  const { dataReportSaka, dataSkSaka } = props

  const [name, setName] = useState('');
  const [sakaId, setSakaId] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [document, setDocument] = useState('');

  const handleFileChange = (event) => {
    setDocument(event.target.files[0]);
  };
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama laporan harus diisi!';
    if (!sakaId) errors.sakaId = 'SAKA harus diisi!';
    if (!reportDate) errors.reportDate = 'Tanggal laporan harus diisi!';
    if (!document) errors.document = 'Dokumen laporan harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('saka_id', sakaId);
    formData.append('report_date', reportDate);
    formData.append('document', document)

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/report-saka', formData, config())
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

  const handleDelete = async (report_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/report-saka/'+report_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));
    }
  }

  const [open, setOpen] = useState(false);
  const handleUpdate = async (report) => {
    setOpen(true);
    setName(report.name)
    setSakaId(report.saka_id)
    setReportDate(report.report_date)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi!';
    if (!sakaId) errors.sakaId = 'SAKA harus diisi!';
    if (!reportDate) errors.reportDate = 'Tanggal laporan harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      // axios.put(externalApi()+'/api/dkr/'+dkr_id, formData, config())
      //   .then(response => {
      //     window.alert("Data berhasil ditambah!")
      //     window.location.reload()
      //   })
      //   .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    }
  }

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
                LAPORAN SAKA
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Laporan SAKA" type="UPLOAD">
                <TextField
                  label="Nama Laporan*"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
                
                <TextField
                  label="Nama SAKA*"
                  variant="outlined"
                  fullWidth
                  value={sakaId}
                  select
                  onChange={(e) => setSakaId(e.target.value)}
                  error={!!errors.sakaId}
                  helperText={errors.sakaId ? errors.sakaId : ''}
                  sx={{ mt: 3 }}
                >
                  {dataSkSaka.map((saka) => (
                    <MenuItem key={saka.saka_id} value={saka.saka_id}>
                      {saka.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  name="reportDate"
                  label="Tanggal Terbit*"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                  error={!!errors.reportDate}
                  helperText={errors.reportDate ? errors.reportDate : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mt: 3 }}
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
              </ModalCreate>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama Laporan</TableCell>
                  <TableCell align="left">SAKA</TableCell>
                  <TableCell align="left">Tanggal Terbit</TableCell>
                  <TableCell align="left">Document</TableCell>
                  <TableCell align="left">#</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataReportSaka.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Nama Saka
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {formatDate(row.report_date)}
                    </TableCell>
                    <TableCell align="left">
                      <Button href={externalApi()+row.document} target="_blank">
                        Document
                      </Button>
                    </TableCell>
                    <TableCell>
                      <MenuTooltip>
                        <MenuItem onClick={() => handleUpdate(row)}>Update</MenuItem>
                        <MenuItem onClick={() => handleDelete(row.report_id)}>Delete</MenuItem>
                      </MenuTooltip>
                    </TableCell>
                  </TableRow>
                ))}
                <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title={`Update Laporan SAKA`} handleClose={handleClose}>
                  <TextField
                    label="Nama Laporan*"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name : ''}
                  />
                  
                  <TextField
                    label="Nama SAKA*"
                    variant="outlined"
                    fullWidth
                    value={sakaId}
                    select
                    onChange={(e) => setSakaId(e.target.value)}
                    error={!!errors.sakaId}
                    helperText={errors.sakaId ? errors.sakaId : ''}
                    sx={{ mt: 3 }}
                  >
                    {dataSkSaka.map((saka) => (
                      <MenuItem key={saka.saka_id} value={saka.saka_id}>
                        {saka.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    name="reportDate"
                    label="Tanggal Terbit*"
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                    error={!!errors.reportDate}
                    helperText={errors.reportDate ? errors.reportDate : ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 3 }}
                  />
                </ModalUpdate>
              </TableBody>
            </Table>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}