import React, {useState} from 'react'
import { Card, CardContent, Grid, Typography, TextField, List, Box, IconButton } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import {
  CheckCircleOutline as CheckCircleOutlineIcon
} from '@mui/icons-material';

export default function SkDkr(props) {
  const [document, setDocument] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!document) errors.document = 'Document is required';

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
            <Grid item align="center">
              <Box sx={{ maxWidth: "20%" }}>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Unduh File SK DKR 
                  <IconButton>
                    <CheckCircleOutlineIcon sx={{ color: '#4040A1' }} />
                  </IconButton>
                </Typography>
                <ModalCreate handleSubmit={handleSubmit} title="Upload SK DKR" type="UPLOAD">
                  <TextField
                    label="Document*"
                    type="file"
                    variant="outlined"
                    fullWidth
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                    error={!!errors.document}
                    helperText={errors.document ? errors.document : ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </ModalCreate>
              </Box>
            </Grid>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}