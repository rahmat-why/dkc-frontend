import React, {useState} from 'react'
import axios from 'axios';
import { Card, CardContent, Grid, Typography, TextField, List, Box, IconButton, Button } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import {
  CheckCircleOutline as CheckCircleOutlineIcon
} from '@mui/icons-material';
import { externalApi, config } from '../../utils/utils';

export default function SkDkr(props) {
  const [document, setDocument] = useState('');
  const [errors, setErrors] = useState({});

  const handleFileChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const { dataSkDkr } = props

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!document) errors.document = 'Document is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('document', document);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/sk-dkr/DKR0.7388286687978849', formData, config())
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        console.error(error);
      }

      // window.location.reload()
    }
  }

  const documentSkDkr = () => {
    if(!dataSkDkr) {
      return <Box>Belum diupload!</Box>
    }else{
      return <Typography
                component="div"
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                <Button href={externalApi()+dataSkDkr.document} target="_blank">
                  Unduh Document
                </Button>

                <IconButton>
                  <CheckCircleOutlineIcon sx={{ color: '#4040A1' }} />
                </IconButton>
              </Typography>
    }
  }
  
  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, pl: 2, pr: 2 }}>
            <Grid item align="center">
              <Box sx={{ maxWidth: "20%" }}>
                {documentSkDkr()}
                <ModalCreate handleSubmit={handleSubmit} title="Upload SK DKR" type="UPLOAD">
                  <TextField
                    label="Document*"
                    type="file"
                    variant="outlined"
                    fullWidth
                    onChange={handleFileChange}
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