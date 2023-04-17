import React, {useState} from 'react'
import { Card, CardContent, Grid, CardMedia, TextField, List, Box } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"

export default function StructureDkr(props) {
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid></Grid>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Structure DKR" type="UPLOAD">
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
            <Grid item align="center">
              <CardMedia 
                component="img"
                alt="Strukture DKR"
                image="/Structure.png"
                title="Strukture DKR"
              />
            </Grid>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}