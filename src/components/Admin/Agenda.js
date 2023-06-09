import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box, TextField, MenuItem } from "@mui/material"
import { formatDate } from '../../utils/utils';
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi, config } from "./../../utils/utils.js"

export default function Agenda(props) {
  const { dataAgenda } = props
  
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: '',
    scheduleAt: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.title) errors.title = 'Title harus diisi!';
    if (!formData.scheduleAt) errors.scheduleAt ='Schedule date harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      axios.post(externalApi()+'/api/agendas', formData, config())
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

  const handleDelete = async (agenda_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/agendas/'+agenda_id, config())
      .then(response => {
        window.alert("Data berhasil dihapus!")
        window.location.reload()
      })
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));
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
                AGENDA
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Agenda" type="UPLOAD">
                <TextField 
                  name="title"
                  label="Title*" 
                  variant="outlined"
                  fullWidth
                  value={formData.title}
                  onChange={handleInputChange}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title : ''}
                />

                <TextField
                  name="scheduleAt"
                  label="Schedule date*"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={formData.scheduleAt}
                  onChange={handleInputChange}
                  error={!!errors.scheduleAt}
                  helperText={errors.scheduleAt ? errors.scheduleAt : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mt: 3 }}
                />
              </ModalCreate>
              
            </Box>

            {dataAgenda.map((agenda, index) => (
              <ListItem alignItems="flex-start" justify="space-between" key={agenda.agenda_id}>
                <ListItemText
                  primary={agenda.title}
                  secondary={
                    <React.Fragment>
                      <Divider sx={{ mt: 1 }} />
                      <Typography
                        component="div"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {formatDate(agenda.scheduleAt)}
                      </Typography>
                      
                    </React.Fragment>
                  }
                />
                <MenuTooltip style={{ marginLeft: 'auto' }}>
                  <MenuItem onClick={() => handleDelete(agenda.agenda_id)}>Delete</MenuItem>
                </MenuTooltip>
              </ListItem>
            ))}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}