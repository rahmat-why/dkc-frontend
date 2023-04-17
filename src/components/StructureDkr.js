import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, Container } from "@mui/material"

export default function StructureDkr(props) {
  const { dkr_id } = props
  const dkrIdUpper = dkr_id.toUpperCase();
  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <Container maxWidth="md">
          <Typography 
            gutterBottom 
            align="center" 
            variant="h6" 
            component="div" 
            fontWeight="bold"
            sx={{ marginTop: '20px' }}
          >
            STRUKTUR ORGANISASI DKR {dkrIdUpper}
          </Typography>

          <Grid item align="center">
            <CardMedia 
              component="img"
              alt="Strukture DKR"
              image="/Structure.png"
              title="Strukture DKR"
            />
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
}