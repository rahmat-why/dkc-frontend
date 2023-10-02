import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box, Grid, CardMedia, Container } from "@mui/material"

export default function Achievement(props) {
  const { dataAchievement } = props
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
          PRESTASI
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {dataAchievement.map((achievement, index) => (
            <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }} key={achievement.achievement_id}>
              <Container maxWidth="lg">
                <Grid container spacing={2}>
                  <Grid item md={2} xs={3} align="right">
                    <CardMedia
                      component="img"
                      alt={achievement.title}
                      image="/trophy.png"
                      title={achievement.title}
                      sx={{
                        mt: 1,
                        maxWidth: 100
                      }}
                    />
                  </Grid>
                  <Grid item md={10} xs={9} align="left">
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={achievement.title}
                        sx={{ textAlign: 'left', paddingRight: '16px' }}
                      />
                    </ListItem>
                    <Typography
                      component="div"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, mb: 1, textAlign: 'left', paddingLeft: '16px' }}
                    >
                      {achievement.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}