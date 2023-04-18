import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Grid, CardMedia, MenuItem, TextField } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi } from "./../../utils/utils.js"

export default function Achievement(props) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { dataAchievement } = props

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.title) errors.title = 'Title is required';
    if (!formData.description) errors.description = 'Description is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/achievements', formData)
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    
      window.location.reload()
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (goal_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/achievements/'+goal_id)
      .then(response => window.alert("Data berhasil dihapus!"))
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));

      window.location.reload()
    }
  }

  return (
    <Card sx={{ mt: 2, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
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
                PRESTASI
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Prestasi" type="UPLOAD">
                <TextField
                  label="Title*"
                  variant="outlined"
                  name="title"
                  fullWidth
                  value={formData.title}
                  onChange={handleInputChange}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title : ''}
                />
                
                <TextField
                  label="Description*"
                  variant="outlined"
                  name="description"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description : ''}
                  sx={{ mt: 2 }}
                />
              </ModalCreate>
            </Box>

            {dataAchievement.map((achievement, index) => (
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }} key={achievement.achievement_id}>
                <Grid container spacing={2}>
                  <Grid item md={2} xs={3} align="right">
                    <CardMedia
                      component="img"
                      alt={achievement.title}
                      image="/trophy.png"
                      title={achievement.title}
                      sx={{
                        mt: 1,
                        maxWidth: 75
                      }}
                    />
                  </Grid>
                  <Grid item md={10} xs={9} align="left">
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={achievement.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="div"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mt: 1 }}
                            >
                              {achievement.description}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <MenuTooltip>
                    <MenuItem>Update</MenuItem>
                    <MenuItem onClick={() => handleDelete(achievement.achievement_id)}>Delete</MenuItem>
                  </MenuTooltip>
                </Box>
              </Box>
            ))}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}