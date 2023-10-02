import React, { useState } from 'react'
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, TextField, MenuItem } from "@mui/material"
import { formatDate, formatDateRaw } from '../../utils/utils';
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import ModalUpdate from "./Agenda/ModalUpdate"
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

  const handleDelete = async (agenda_id) => {
    if (window.confirm("Apakah anda yakin ingin menghpus data ini?")) {
      axios.delete(externalApi()+'/api/agendas/'+agenda_id, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
    }
  }

  const [agenda_id, setAgendaId] = useState('');
  const [open, setOpen] = useState(false);
  const handleUpdate = async (agenda) => {
    setOpen(true);
    setFormData({ title: agenda.title, scheduleAt: formatDateRaw(agenda.scheduleAt) })
    setAgendaId(agenda.agenda_id)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.title) errors.name = 'title is required';
    if (!formData.scheduleAt) errors.scheduleAt = 'schedule at is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    if (window.confirm("Apakah anda yakin ingin memperbarui data ini?")) {
      axios.put(externalApi()+'/api/agendas/'+agenda_id, formData, config())
      .then(response => {
        window.alert(response.data.message)
        window.location.reload()
      })
      .catch(error => window.alert(error.response.data.message));
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
                  secondary={formatDate(agenda.scheduleAt)}
                />
                <MenuTooltip style={{ marginLeft: 'auto' }}>
                  <MenuItem onClick={() => handleUpdate(agenda)}>Update</MenuItem>
                  <MenuItem onClick={() => handleDelete(agenda.agenda_id)}>Delete</MenuItem>
                </MenuTooltip>
              </ListItem>
            ))}
            <ModalUpdate handleSubmit={handleSubmitUpdate} open={open} title="Update Agenda" handleClose={handleClose}>
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
            </ModalUpdate>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}