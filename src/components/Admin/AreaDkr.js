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
  MenuItem
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
import { externalApi, config } from "./../../utils/utils.js"

export default function AreaDkr(props) {
  const { dataAreaDkr, areas } = props
  const [dkr_id, setDkrId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    area_id: '',
    username: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.area_id) errors.area_id = 'Area is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/dkr', formData, config())
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    
      window.location.reload()
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [open, setOpen] = useState(false);

  const handleUpdate = (dkr) => {
    setOpen(true);
    setFormData({ name: dkr.name, area_id: dkr.area_id, username: dkr.username, password: dkr.password })
    setDkrId(dkr.dkr_id)
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.area_id) errors.area_id = 'Area is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/dkr/'+dkr_id, formData, config())
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    
      window.location.reload()
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
                  name="name"
                  fullWidth
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
                <TextField
                  label="Area*"
                  variant="outlined"
                  name="area_id"
                  fullWidth
                  select
                  value={formData.area_id}
                  onChange={handleInputChange}
                  error={!!errors.area_id}
                  helperText={errors.area_id ? errors.area_id : ''}
                  sx={{ mt: 3 }}
                >
                  {areas.map((area) => (
                    <MenuItem key={area.id} value={area.area_id}>
                      {area.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Username*"
                  variant="outlined"
                  name="username"
                  fullWidth
                  value={formData.username}
                  onChange={handleInputChange}
                  error={!!errors.username}
                  helperText={errors.username ? errors.username : ''}
                  sx={{ mt: 3 }}
                />
                <TextField
                  label="Password*"
                  variant="outlined"
                  name="password"
                  fullWidth
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password : ''}
                  sx={{ mt: 3 }}
                />
              </ModalCreate>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama</TableCell>
                  <TableCell align="left">Area</TableCell>
                  <TableCell align="left">#</TableCell>
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
                    <TableCell align="left">{row.area.name}</TableCell>
                    <TableCell align="left">
                      <MenuTooltip style={{ marginLeft: 'auto' }}>
                        <MenuItem onClick={() => handleUpdate(row)}>Update</MenuItem>
                      </MenuTooltip>
                    </TableCell>
                  </TableRow>
                ))}
                <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update DKR" handleClose={handleClose}>
                  <TextField
                    label="Nama*"
                    variant="outlined"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name : ''}
                  />
                  <TextField
                    label="Area*"
                    variant="outlined"
                    name="area_id"
                    fullWidth
                    select
                    value={formData.area_id}
                    onChange={handleInputChange}
                    error={!!errors.area_id}
                    helperText={errors.area_id ? errors.area_id : ''}
                    sx={{ mt: 3 }}
                  >
                    {areas.map((area) => (
                      <MenuItem key={area.id} value={area.area_id}>
                        {area.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="Username*"
                    variant="outlined"
                    name="username"
                    fullWidth
                    value={formData.username}
                    disabled
                    error={!!errors.username}
                    helperText={errors.username ? errors.username : ''}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    label="Password*"
                    variant="outlined"
                    name="password"
                    fullWidth
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password : ''}
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