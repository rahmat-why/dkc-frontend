import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, CardMedia, Box, TextField, Button } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import { externalApi, config } from "./../../utils/utils.js"

export default function Layer(props) {
  const { dataLayer } = props
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!image) errors.image = 'image is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', 'LAYER')

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/banners', formData, config())
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

  const handleDelete = async (banner_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/banners/'+banner_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    }
  }

  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", pl: 2, pr: 2 }}>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ marginTop: '20px' }}
              >
                LAYER
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Layer" type="UPLOAD">
                <TextField
                  label="Layer*"
                  type="file"
                  variant="outlined"
                  fullWidth
                  onChange={handleFileChange}
                  error={!!errors.image}
                  helperText={errors.image ? errors.image : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ModalCreate>
              
            </Box>
          
            {dataLayer.map((layer, index) => (
              <Box key={layer.banner_id}>
                <CardMedia
                  sx={{ height: 200, mt: 3 }}
                  image={externalApi()+layer.image}
                  title={layer.image}
                />
                <Button onClick={() => handleDelete(layer.banner_id)}>
                  Delete
                </Button>
              </Box>
            ))}
            {/* <MenuTooltip align="right">
              <MenuItem>Delete</MenuItem>
            </MenuTooltip> */}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}