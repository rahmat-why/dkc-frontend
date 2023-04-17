import React, { useState } from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, Box, List, TextField, MenuItem, Button, IconButton } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { 
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';

export default function Misi(props) {
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  
  const { dataMisi } = props

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!description) errors.description = 'Description is required';

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
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ marginTop: '20px' }}
              >
                MISI
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Tambah Misi" type="ADD">
                <TextField
                  label="Misi*"
                  variant="outlined"
                  fullWidth
                  value={description}
                  multiline
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                  error={!!errors.description}
                  helperText={errors.description ? errors.description : ''}
                />
              </ModalCreate>
            </Box>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={9} align="left">
                {dataMisi.map((misi, index) => (
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" gutterBottom>
                      {misi.description}
                    </Typography>
                    <MenuTooltip style={{ marginLeft: 'auto' }}>
                      <MenuItem>Update</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </MenuTooltip>
                  </Box>
                ))}
              </Grid>  
              <Grid item xs={12} md={3} align="left">
                <CardMedia 
                  component="img"
                  alt="Misi DKC"
                  image="/visi.jpg"
                  title="Misi DKC"
                />
                <Button sx={{ backgroundColor: '#4040A1', height: '35px' }} fullWidth variant="contained" className="bg-primary" disabled>
                  <IconButton>
                    <CloudUploadIcon sx={{ color: "#fff" }} />
                  </IconButton>
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