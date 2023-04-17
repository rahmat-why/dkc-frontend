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
  Grid,
  CardMedia
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"

export default function ProfileOfficer(props) {
  const { dataProfileOfficer } = props

  const [name, setName] = useState('');
  const [nta, setNta] = useState('');
  const [stage, setStage] = useState('');
  const [education, setEducation] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [image, setImage] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi';
    if (!nta) errors.nta = 'NTA harus diisi';
    if (!stage) errors.stage = 'Stage harus diisi';
    if (!education) errors.education = 'Pendidikan harus diisi';
    if (!city) errors.city = 'Kota/Kab harus diisi';
    if (!instagram) errors.instagram = 'Akun instagram harus diisi';
    if (!facebook) errors.facebook = 'Akun facebook harus diisi';
    if (!image) errors.image = 'Foto harus diisi';

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
                PROFIL PENGURUS
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Tambah Pengurus" type="ADD">
                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Nama*"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name : ''}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="NTA*"
                      variant="outlined"
                      fullWidth
                      value={nta}
                      onChange={(e) => setNta(e.target.value)}
                      error={!!errors.nta}
                      helperText={errors.nta ? errors.nta : ''}
                    />
                  </Grid>
                </Grid>
                
                <TextField
                  label="Tingkat*"
                  variant="outlined"
                  fullWidth
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  error={!!errors.stage}
                  helperText={errors.stage ? errors.stage : ''}
                  sx={{ mt: 3 }}
                />
                <TextField
                  label="Pendidikan*"
                  variant="outlined"
                  fullWidth
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  error={!!errors.education}
                  helperText={errors.education ? errors.education : ''}
                  sx={{ mt: 3 }}
                  InputProps={{
                    placeholder: 'Isi dengan nama institusi',
                  }}
                />
                <TextField
                  label="Kota/Kab*"
                  variant="outlined"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  error={!!errors.city}
                  helperText={errors.city ? errors.city : ''}
                  sx={{ mt: 3 }}
                />

                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Akun Instagram*"
                      variant="outlined"
                      fullWidth
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      error={!!errors.instagram}
                      helperText={errors.instagram ? errors.instagram : ''}
                      sx={{ mt: 3 }}
                      InputProps={{
                        placeholder: 'Awali dengan https://',
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Akun Facebook*"
                      variant="outlined"
                      fullWidth
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      error={!!errors.facebook}
                      helperText={errors.facebook ? errors.facebook : ''}
                      sx={{ mt: 3 }}
                      InputProps={{
                        placeholder: 'Awali dengan https://',
                      }}
                    />
                  </Grid>
                </Grid>
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
                  <TableCell align="left">Tingkat</TableCell>
                  <TableCell align="left">Pendidikan</TableCell>
                  <TableCell align="left">Kota/Kab</TableCell>
                  <TableCell align="left">Instagram</TableCell>
                  <TableCell align="left">Facebook</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataProfileOfficer.map((row) => (
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
                    <TableCell align="left">{row.stage_name}</TableCell>
                    <TableCell align="left">{row.education}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="left">{row.instagram}</TableCell>
                    <TableCell align="left">{row.facebook}</TableCell>
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