import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia, List, Box, TextField } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import { externalApi, config } from "./../../utils/utils.js"

export default function SpeechLeader(props) {

  const { dataSpeechLeader } = props

  const [description, setDescription] = useState(dataSpeechLeader.description);
  const [name, setName] = useState(dataSpeechLeader.name);
  const [nta, setNta] = useState(dataSpeechLeader.nta);
  const [image, setImage] = useState('');

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!description) errors.description = 'Description is required';
    if (!name) errors.name = 'Nama Ketua DKC is required';
    if (!nta) errors.nta = 'NTA is required';
    if (!image) errors.image = 'Image is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('description', description);
    formData.append('name', name);
    formData.append('nta', nta);
    formData.append('image', image);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/speechs', formData, config())
        .then(response => {
          window.alert("Data berhasil ditambah!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleUpdate = async () => {
    setDescription(dataSpeechLeader.description);
    setName(dataSpeechLeader.name);
    setNta(dataSpeechLeader.nta);
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
                SAMBUTAN KETUA DKC PERIODE 2020-2025
              </Typography>
              
              <ModalCreate handleSubmit={handleSubmit} handleUpdate={handleUpdate} title="Update Sambutan Ketua DKC" type="UPDATE">
                <TextField
                  label="Nama Ketua DKC*"
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
                <TextField
                  label="Image* (silahkan upload ulang)"
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
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={9} align="left">
                <Typography variant="body1" gutterBottom>
                  {dataSpeechLeader.description}
                </Typography>
                <Typography sx={{ mt: 4, fontStyle: 'italic' }} align="right">
                  "{dataSpeechLeader.name}"
                </Typography>
                <Typography sx={{ fontStyle: 'bold' }} align="right">
                  ({dataSpeechLeader.nta})
                </Typography>
              </Grid>  
              <Grid item xs={12} md={3} align="left">
                <CardMedia 
                  component="img"
                  alt="Sambutan DKC Kab.Bogor"
                  image={externalApi()+dataSpeechLeader.image}
                  title="Sambutan DKC Kab.Bogor"
                />
              </Grid>
            </Grid>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}