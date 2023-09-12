import React, {useState} from 'react'
import axios from 'axios';
import { Card, CardContent, Grid, CardMedia, TextField, List, Box } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import { externalApi, config } from "./../../utils/utils.js"

export default function StructureDkr(props) {
  const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
  const { dataStructureDkr } = props
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

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/structures-dkr/'+dataLogin.data.dkr_id, formData, config())
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

  const imageStructureDkr = () => {
    if(dataStructureDkr.image_structure_dkr == null) {
      return <Box>Belum diupload!</Box>
    }else{
      return <Box><CardMedia component="img"alt="Strukture DKR" image={externalApi()+dataStructureDkr.image_structure_dkr} title="Strukture DKR"/></Box>
    }
  }
  
  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, pl: 2, pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid></Grid>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Structure DKR" type="UPLOAD">
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
                />
              </ModalCreate>
            </Box>
            <Grid item align="center">
              {imageStructureDkr()}
            </Grid>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}