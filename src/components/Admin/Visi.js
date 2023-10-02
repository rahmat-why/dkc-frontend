import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CardMedia, Box, List, TextField, MenuItem, Button } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
import { 
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';
import { externalApi, config } from "./../../utils/utils.js"

export default function Visi(props) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    description: '',
    type: 'VISI'
  });
  
  const { dataVisi } = props

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.description) errors.description = 'Description is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/goals', formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (goal_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/goals/'+goal_id, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const [visi_id, setVisiId] = useState('');
  const [open, setOpen] = useState(false);
  const handleUpdate = async (visi) => {
    setOpen(true);
    setFormData({ description: visi.description, type: 'VISI' })
    setVisiId(visi.goal_id)
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.description) errors.description = 'description is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log(visi_id)

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/goals/'+visi_id, formData, config())
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
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ marginTop: '20px' }}
              >
                VISI
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Tambah Visi" type="ADD">
                <TextField
                  label="Visi*"
                  variant="outlined"
                  name="description"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description : ''}
                />
              </ModalCreate>
            </Box>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={9} align="left">
                {dataVisi.map((visi, index) => (
                  <Box key={visi.goal_id} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" gutterBottom>
                      {visi.description}
                    </Typography>
                    <MenuTooltip style={{ marginLeft: 'auto' }}>
                      <MenuItem onClick={() => handleUpdate(visi)}>Update</MenuItem>
                      <MenuItem onClick={() => handleDelete(visi.goal_id)}>Delete</MenuItem>
                    </MenuTooltip>
                  </Box>
                ))}
                <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update Visi" handleClose={handleClose}>
                  <TextField
                    label="Visi*"
                    variant="outlined"
                    name="description"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description : ''}
                  />
                </ModalUpdate>
              </Grid>  
              <Grid item xs={12} md={3} align="left">
                <CardMedia 
                  component="img"
                  alt="Visi DKC"
                  image="/visi.jpg"
                  title="Visi DKC"
                />
                <Button sx={{ backgroundColor: '#4040A1', height: '35px' }} fullWidth variant="contained" className="bg-primary" disabled endIcon={<CloudUploadIcon />}>
                  Upload
                </Button>
              </Grid>
            </Grid>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}