import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box, Grid, Container } from "@mui/material"

export default function potensiSegment(props) {
  const { dataPotensi } = props
  return (
    <Card sx={{ mt: 2, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Typography 
          gutterBottom 
          align="center" 
          variant="h6" 
          component="div" 
          fontWeight="bold"
          sx={{ marginTop: '20px' }}
        >
          DATA POTENSI
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {dataPotensi.map((potensiSegment, index) => (
                <Grid key={potensiSegment.stage_id} item xs={6} md={3} align="center">
                  <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={potensiSegment.value}
                        secondary={
                          <React.Fragment>
                            <Divider sx={{ mt: 1 }} />
                            <Typography
                              component="div"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mt: 1 }}
                            >
                              {potensiSegment.name}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </List>
      </CardContent>
    </Card>
  );
}