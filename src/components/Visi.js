import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material"

export default function Visi(props) {
  const { dataVisi } = props
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
          VISI
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={3} align="right">
            <CardMedia 
              component="img"
              alt="Visi DKC"
              image="/visi.jpg"
              title="Visi DKC"
            />
          </Grid>
          <Grid item xs={12} md={9} align="left">
            {dataVisi.map((visi, index) => (
              <Typography variant="body1" gutterBottom>
                {visi.description}
              </Typography>
            ))}
          </Grid>  
        </Grid>
      </CardContent>
    </Card>
  );
}