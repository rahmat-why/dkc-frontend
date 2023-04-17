import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, Container } from "@mui/material"

export default function SpeechLeader(props) {
  const { dataSpeechLeader } = props
  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <Container maxWidth="lg">
        <CardContent>
          <Typography 
            gutterBottom 
            align="center" 
            variant="h6" 
            component="div" 
            fontWeight="bold"
            sx={{ marginTop: '20px' }}
          >
            SAMBUTAN KETUA DKC PERIODE 2020-2025
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={3} align="right">
              <CardMedia 
                component="img"
                alt="Sambutan DKC Kab.Bogor"
                image={dataSpeechLeader.image}
                title="Sambutan DKC Kab.Bogor"
              />
            </Grid>
            <Grid item xs={12} md={9} align="left">
              <Typography variant="body1" gutterBottom>
                {dataSpeechLeader.description}
              </Typography>
              <Typography sx={{ mt: 4, fontStyle: 'italic' }} align="right">
                "{dataSpeechLeader.name}"
              </Typography>
            </Grid>  
          </Grid>
        </CardContent>
      </Container>
    </Card>
  );
}