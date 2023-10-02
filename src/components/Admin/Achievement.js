import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Grid, CardMedia, MenuItem, TextField } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
import { externalApi, config } from "./../../utils/utils.js"

export default function Achievement(props) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { dataAchievement } = props

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
      axios.post(externalApi()+'/api/achievements', formData, config())
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
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/achievements/'+goal_id, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const [achievement_id, setAchievementId] = useState('');
  const [open, setOpen] = useState(false);
  const handleUpdate = async (achievement) => {
    setOpen(true);
    setTitle(achievement.title)
    setDescription(achievement.description)
    setAchievementId(achievement.achievement_id)
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!title) errors.title = 'title is required';
    if (!description) errors.description = 'description at is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = {
      title : title,
      description : description
    }

    console.log(achievement_id)

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/achievements/'+achievement_id, formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
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
                        secondary={achievement.description}
                      />
                    </ListItem>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <MenuTooltip>
                    <MenuItem onClick={() => handleUpdate(achievement)}>Update</MenuItem>
                    <MenuItem onClick={() => handleDelete(achievement.achievement_id)}>Delete</MenuItem>
                  </MenuTooltip>
                </Box>
              </Box>
            ))}
              <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update achievement" handleClose={handleClose}>
                  <TextField
                    label="Judul*"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name : ''}
                  />
                  <TextField
                    label="Deskripsi*"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    error={!!errors.link}
                    helperText={errors.link ? errors.link : ''}
                    sx={{ mt: 3 }}
                  />
              </ModalUpdate>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}