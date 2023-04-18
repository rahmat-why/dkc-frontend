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
  MenuItem,
  CardMedia
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi } from "./../../utils/utils.js"

export default function AreaCoordinator(props) {
  const { dataAreaCoordinator, areas } = props

  const [name, setName] = useState('');
  const [nta, setNta] = useState('');
  const [area_id, setAreaId] = useState('');
  const [image, setImage] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi';
    if (!nta) errors.nta = 'NTA harus diisi';
    if (!area_id) errors.area_id = 'Area harus diisi';
    if (!image) errors.image = 'Foto harus diisi';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('nta', nta);
    formData.append('area_id', area_id);
    formData.append('image', image);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/area-coordinators', formData)
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDelete = async (coordinator_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/area-coordinators/'+coordinator_id)
      .then(response => window.alert("Data berhasil dihapus!"))
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));

      // window.location.reload()
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
                KOORDINATOR WILAYAH
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Tambah Koordinator Wilayah" type="ADD">
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
                  label="NTA*"
                  variant="outlined"
                  fullWidth
                  value={nta}
                  onChange={(e) => setNta(e.target.value)}
                  error={!!errors.nta}
                  helperText={errors.nta ? errors.nta : ''}
                  sx={{ mt: 3 }}
                />
                <TextField
                  label="Area*"
                  variant="outlined"
                  fullWidth
                  select
                  value={area_id}
                  onChange={(e) => setAreaId(e.target.value)}
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
                  label="Image*"
                  type="file"
                  variant="outlined"
                  fullWidth
                  onChange={handleFileChange}
                  error={!!errors.image}
                  helperText={errors.image ? errors.image : ''}
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
                  <TableCell align="left">Foto</TableCell>
                  <TableCell align="left">Nama</TableCell>
                  <TableCell align="left">NTA</TableCell>
                  <TableCell align="left">Area</TableCell>
                  <TableCell align="left">#</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataAreaCoordinator.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <CardMedia
                        sx={{ height: 140, width: 100 }}
                        image={row.image}
                        title={row.name}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.nta}</TableCell>
                    <TableCell align="left">{row.area_name}</TableCell>
                    <TableCell align="left">
                      <MenuTooltip>
                        <MenuItem onClick={() => handleDelete(row.coordinator_id)}>Delete</MenuItem>
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
  );
}