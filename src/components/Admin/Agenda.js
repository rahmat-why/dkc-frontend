import React, { useState } from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box, TextField, MenuItem } from "@mui/material"
import { formatDate } from '../../utils/utils';
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"

export default function Agenda(props) {
  const { dataAgenda } = props
  
  const [title, setTitle] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!title) errors.title = 'Title harus diisi!';
    if (!scheduleDate) errors.scheduleDate = 'Schedule date harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  }

  const handleUpdate = async (e) => {
  
  }

  const handleDelete = async (e) => {
  
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
                  label="Title*" 
                  variant="outlined"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  error={!!errors.title}
                  helperText={errors.title ? errors.title : ''}
                />

                <TextField
                  label="Schedule date*"
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  error={!!errors.scheduleDate}
                  helperText={errors.scheduleDate ? errors.scheduleDate : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mt: 3 }}
                />
              </ModalCreate>
              
            </Box>

            {dataAgenda.map((agenda, index) => (
              <ListItem alignItems="flex-start" justify="space-between">
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
                        {formatDate(agenda.schedule_date)}
                      </Typography>
                      
                    </React.Fragment>
                  }
                />
                <MenuTooltip style={{ marginLeft: 'auto' }}>
                  <MenuItem onClick={handleUpdate}>Update</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </MenuTooltip>
              </ListItem>
            ))}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}