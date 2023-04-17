import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, Container } from "@mui/material"

export default function SpeechLeader(props) {
  const { dataAreaCoordinator } = props
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
          KOORDINATOR WILAYAH
        </Typography>
        <Container maxWidth="lg">
          {dataAreaCoordinator.map((coordinator, index) => (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={3} align="right">
                <CardMedia 
                  component="img"
                  alt="Sambutan DKC Kab.Bogor"
                  image={coordinator.image}
                  title="Sambutan DKC Kab.Bogor"
                />
              </Grid>
              <Grid item xs={12} md={9} align="left">
                <Typography variant="body1" fontWeight="bold">
                  {coordinator.name}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                  {coordinator.nta}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {coordinator.area_name}
                </Typography>
              </Grid>  
            </Grid>
          ))}
        </Container>
      </CardContent>
    </Card>
  );
}