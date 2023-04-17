import React, { useState } from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Grid, CardMedia, MenuItem, TextField } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"

export default function Achievement(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const { dataAchievement } = props

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!description) errors.description = 'Description is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
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
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title : ''}
                />
                
                <TextField
                  label="Description*"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description : ''}
                  sx={{ mt: 2 }}
                />
              </ModalCreate>
            </Box>

            {dataAchievement.map((achievement, index) => (
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
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
                        primary="DKC Kabupaten Bogor Tergiat 1 se-Jawa Barat"
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
                    <MenuItem>Delete</MenuItem>
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