import React, { useState } from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box, TextField, MenuItem } from "@mui/material"
import { formatDate } from '../../utils/utils';
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"

export default function ProgramDkc(props) {
  const { dataProgramDkc } = props
  
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});
  const [year, setYear] = useState('');

  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(5), (val, index) => currentYear + index);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!year) errors.year = 'Year is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
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
              <ModalCreate handleSubmit={handleSubmit} title="Create Agenda" type="ADD">
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
                  id="year"
                  label="Year*"
                  variant="outlined"
                  select
                  value={year}
                  onChange={handleYearChange}
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

            {dataProgramDkc.map((agenda, index) => (
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
                  <MenuItem>Update</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </MenuTooltip>
              </ListItem>
            ))}
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}