import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box, TextField, MenuItem } from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi, config } from "./../../utils/utils.js"

export default function ProgramDkc(props) {
  const { dataProgramDkc } = props
  
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    program_name: '',
    year: ''
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(3), (val, index) => currentYear + index);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.program_name) errors.program_name = 'Program name is required';
    if (!formData.year) errors.year = 'Year is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/programs-dkc', formData, config())
        .then(response => {
          window.alert("Data berhasil ditambah!")
          window.location.reload()
        })
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
    }
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = async (program_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/programs-dkc/'+program_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));
    }
  }

  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", maxWidth: "50%" }}>
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
                PROGRAM DKC
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Program DKC" type="ADD">
                <TextField 
                  label="Program name*" 
                  variant="outlined"
                  name="program_name"
                  fullWidth
                  value={formData.program_name}
                  onChange={handleInputChange}
                  error={!!errors.program_name}
                  helperText={errors.program_name ? errors.program_name : ''}
                />

                <TextField
                  id="year"
                  label="Year*"
                  variant="outlined"
                  name="year"
                  select
                  value={formData.year}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
              </ModalCreate>
              
            </Box>

            {dataProgramDkc.map((program, index) => (
              <ListItem key={program.program_id} alignItems="flex-start" justify="space-between">
                <ListItemText
                  primary={program.program_name}
                  secondary={
                    <React.Fragment>
                      <Divider sx={{ mt: 1 }} />
                      <Typography
                        component="div"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {program.year}
                      </Typography>
                      
                    </React.Fragment>
                  }
                />
                <MenuTooltip style={{ marginLeft: 'auto' }}>
                  <MenuItem onClick={() => handleDelete(program.program_id)}>Delete</MenuItem>
                </MenuTooltip>
              </ListItem>
            ))}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}