import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box } from "@mui/material"
import { formatDate } from '../utils/utils';

export default function Agenda(props) {
  const { dataAgenda } = props
  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography 
          gutterBottom 
          align="center" 
          variant="h6" 
          component="div" 
          fontWeight="bold"
          sx={{ marginTop: '20px' }}
        >
          AGENDA
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {dataAgenda.map((agenda, index) => (
            <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }} key={agenda.agenda_id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={agenda.title}
                  sx={{ textAlign: 'left', paddingRight: '16px' }}
                />
              </ListItem>
              <Divider />
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, mb: 1, textAlign: 'left', paddingLeft: '16px' }}
              >
                {formatDate(agenda.scheduleAt)}
              </Typography>
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}