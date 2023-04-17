import React, { useState } from 'react'
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
  IconButton
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import { Settings as SettingsIcon } from '@mui/icons-material';

export default function AreaDkr(props) {
  const { dataAreaDkr } = props

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [nta, setNta] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!description) errors.description = 'Description is required';
    if (!name) errors.name = 'Nama Ketua DKC is required';
    if (!nta) errors.nta = 'NTA is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
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
                AREA DKR
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Tambah DKR" type="ADD">
                <TextField
                  label="Nama*"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
                <TextField
                  label="Area*"
                  variant="outlined"
                  fullWidth
                  value={nta}
                  onChange={(e) => setNta(e.target.value)}
                  error={!!errors.nta}
                  helperText={errors.nta ? errors.nta : ''}
                  sx={{ mt: 3 }}
                />
                <TextField
                  label="Sambutan*"
                  variant="outlined"
                  fullWidth
                  value={description}
                  multiline
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description : ''}
                  sx={{ mt: 3 }}
                />
              </ModalCreate>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama</TableCell>
                  <TableCell align="left">Area</TableCell>
                  <TableCell align="left">Akun</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataAreaDkr.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.area_name}</TableCell>
                    <TableCell align="left">
                      <Button sx={{ height: '35px', backgroundColor: '#4040A1' }} size="small" variant="contained">
                        View 
                        <IconButton><SettingsIcon fontSize='small' sx={{ color: "#fff" }} /></IconButton>
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
  );
}