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
  Grid,
  CardMedia,
  MenuItem
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
import { externalApi, config } from "./../../utils/utils.js"

export default function ProfileOfficer(props) {
  const { dataProfileOfficer, dataStage, dataScope } = props

  const dataPosition = ["KETUA", "WAKIL KETUA", "SEKRETARIS", "SEKRETARIS II", "BENDAHARA", "ANGGOTA"]

  const [officer_id, setOfficerId] = useState('');
  const [name, setName] = useState('');
  const [nta, setNta] = useState('');
  const [stage_id, setStageId] = useState('');
  const [scope_id, setScopeId] = useState('');
  const [position, setPosition] = useState('');
  const [education, setEducation] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [image, setImage] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi';
    if (!nta) errors.nta = 'NTA harus diisi';
    if (!stage_id) errors.stage_id = 'Tingkat harus diisi';
    if (!scope_id) errors.scope_id = 'Divisi harus diisi';
    if (!position) errors.position_id = 'Jabatan harus diisi';
    if (!education) errors.education = 'Pendidikan harus diisi';
    if (!city) errors.city = 'Kota/Kab harus diisi';
    if (!instagram) errors.instagram = 'Akun instagram harus diisi';
    if (!image) errors.image = 'Foto harus diisi';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('nta', nta);
    formData.append('stage_id', stage_id);
    formData.append('scope_id', scope_id);
    formData.append('position', position);
    formData.append('education', education);
    formData.append('city', city);
    formData.append('instagram', instagram);
    formData.append('image', image);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/officers', formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const handleDelete = async (officer_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/officers/'+officer_id, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const [open, setOpen] = useState(false);
  const handleUpdate = async (officer) => {
    setOpen(true);
    setOfficerId(officer.officer_id)
    setName(officer.name)
    setNta(officer.nta)
    setStageId(officer.stage_id)
    setScopeId(officer.scope_id)
    setPosition(officer.position)
    setEducation(officer.education)
    setCity(officer.city)
    setInstagram(officer.instagram)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama harus diisi';
    if (!nta) errors.nta = 'NTA harus diisi';
    if (!stage_id) errors.stage_id = 'Tingkat harus diisi';
    if (!scope_id) errors.scope_id = 'Divisi harus diisi';
    if (!position) errors.position_id = 'Jabatan harus diisi';
    if (!education) errors.education = 'Pendidikan harus diisi';
    if (!city) errors.city = 'Kota/Kab harus diisi';
    if (!instagram) errors.instagram = 'Akun instagram harus diisi';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = {
      name : name,
      nta : nta,
      stage_id : stage_id,
      scope_id : scope_id,
      position : position,
      education : education,
      city : city,
      instagram : instagram
    }

    console.log(officer_id)
    console.log(formData);

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/officers/'+officer_id, formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
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
                      name="name"
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
                      name="nta"
                      fullWidth
                      value={nta}
                      onChange={(e) => setNta(e.target.value)}
                      error={!!errors.nta}
                      helperText={errors.nta ? errors.nta : ''}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      id="stage_id"
                      label="Tingkat*"
                      variant="outlined"
                      name="stage_id"
                      select
                      value={stage_id}
                      onChange={(e) => setStageId(e.target.value)}
                      fullWidth
                      sx={{ mt: 3 }}
                    >
                      {dataStage.map((stage) => (
                        <MenuItem key={stage.stage_id} value={stage.stage_id}>
                          {stage.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      id="scope_id"
                      label="Divisi*"
                      variant="outlined"
                      name="scope_id"
                      select
                      value={scope_id}
                      onChange={(e) => setScopeId(e.target.value)}
                      fullWidth
                      sx={{ mt: 3 }}
                    >
                      {dataScope.map((scope) => (
                        <MenuItem key={scope.scope_id} value={scope.scope_id}>
                          {scope.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                <TextField
                  id="position"
                  label="Jabatan*"
                  variant="outlined"
                  name="position"
                  select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {dataPosition.map((position) => (
                    <MenuItem key={position} value={position}>
                      {position}
                    </MenuItem>
                  ))}
                </TextField>
                
                <TextField
                  label="Pendidikan*"
                  variant="outlined"
                  name="education"
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
                  name="city"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  error={!!errors.city}
                  helperText={errors.city ? errors.city : ''}
                  sx={{ mt: 3 }}
                />

                <TextField
                  label="Akun Instagram*"
                  variant="outlined"
                  name="instagram"
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
                  <TableCell align="left">Tingkat</TableCell>
                  <TableCell align="left">Divisi</TableCell>
                  <TableCell align="left">Jabatan</TableCell>
                  <TableCell align="left">Pendidikan</TableCell>
                  <TableCell align="left">Kota/Kab</TableCell>
                  <TableCell align="left">Instagram</TableCell>
                  <TableCell align="left">#</TableCell>
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
                        image={row.image ? externalApi() + row.image : '/Logo.png'}
                        title={row.name}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.nta}</TableCell>
                    <TableCell align="left">{row.stage.name}</TableCell>
                    <TableCell align="left">{row.scope.name}</TableCell>
                    <TableCell align="left">{row.position}</TableCell>
                    <TableCell align="left">{row.education}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="left">{row.instagram}</TableCell>
                    <TableCell align="left">
                      <MenuTooltip style={{ marginLeft: 'auto' }}>
                        <MenuItem onClick={() => handleUpdate(row)}>Update</MenuItem>
                        <MenuItem onClick={() => handleDelete(row.officer_id)}>Delete</MenuItem>
                      </MenuTooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update Profil" handleClose={handleClose}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Nama*"
                    variant="outlined"
                    name="name"
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
                    name="nta"
                    fullWidth
                    value={nta}
                    onChange={(e) => setNta(e.target.value)}
                    error={!!errors.nta}
                    helperText={errors.nta ? errors.nta : ''}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <TextField
                    id="stage_id"
                    label="Tingkat*"
                    variant="outlined"
                    name="stage_id"
                    select
                    value={stage_id}
                    onChange={(e) => setStageId(e.target.value)}
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    {dataStage.map((stage) => (
                      <MenuItem key={stage.stage_id} value={stage.stage_id}>
                        {stage.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    id="scope_id"
                    label="Divisi*"
                    variant="outlined"
                    name="scope_id"
                    select
                    value={scope_id}
                    onChange={(e) => setScopeId(e.target.value)}
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    {dataScope.map((scope) => (
                      <MenuItem key={scope.scope_id} value={scope.scope_id}>
                        {scope.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <TextField
                id="position"
                label="Jabatan*"
                variant="outlined"
                name="position"
                select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                fullWidth
                sx={{ mt: 3 }}
              >
                {dataPosition.map((position) => (
                  <MenuItem key={position} value={position}>
                    {position}
                  </MenuItem>
                ))}
              </TextField>
              
              <TextField
                label="Pendidikan*"
                variant="outlined"
                name="education"
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
                name="city"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={!!errors.city}
                helperText={errors.city ? errors.city : ''}
                sx={{ mt: 3 }}
              />

              <TextField
                label="Akun Instagram*"
                variant="outlined"
                name="instagram"
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
            </ModalUpdate>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}