import React, { useState } from 'react'
import { Card, CardContent, Typography, List, CardMedia, Box, TextField } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"

export default function Layer(props) {
  const [layer, setLayer] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!layer) errors.layer = 'Layer is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
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
                  value={layer}
                  onChange={(e) => setLayer(e.target.value)}
                  error={!!errors.layer}
                  helperText={errors.layer ? errors.layer : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </ModalCreate>
              
            </Box>
          
            <CardMedia
              sx={{ height: 200 }}
              image="https://app.angel-ping.my.id/adm/dkc/adm/assets/file/layer/64-DEWAN%20KERJA%20CABANG%20KABUPATEN%20BOGOR%20(2).png"
              title="{product.image}"
            />
            {/* <MenuTooltip align="right">
              <MenuItem>Delete</MenuItem>
            </MenuTooltip> */}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}