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
  MenuItem,
  CardMedia
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"

export default function AreaCoordinator(props) {
  const { dataAreaCoordinator } = props

  const [name, setName] = useState('');
  const [nta, setNta] = useState('');
  const [area, setArea] = useState('');
  const [image, setImage] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi';
    if (!nta) errors.nta = 'NTA harus diisi';
    if (!area) errors.area = 'Area harus diisi';
    if (!image) errors.image = 'Foto harus diisi';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  }

  const handleArea = (event) => {
    setArea(event.target.value);
  };

  const areas = [
    {
      area_id: "AREA1",
      name: "Wilayah 1"
    },
    {
      area_id: "AREA2",
      name: "Wilayah 2"
    },
    {
      area_id: "AREA3",
      name: "Wilayah 3"
    },
    {
      area_id: "AREA4",
      name: "Wilayah 4"
    },
    {
      area_id: "AREA5",
      name: "Wilayah 5"
    }
  ]

  const handleDelete = async (e) => {
  
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
                  value={area}
                  onChange={handleArea}
                  error={!!errors.area}
                  helperText={errors.area ? errors.area : ''}
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
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
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
                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
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