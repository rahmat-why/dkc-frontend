import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, Container, Box } from "@mui/material"
import { externalApi } from "./../utils/utils.js"

export default function StructureDkr(props) {
  const { dkr_id, dataStructureDkr } = props
  const dkrIdUpper = dkr_id.toUpperCase();

  const imageStructureDkr = () => {
    if(!dataStructureDkr) {
      return <Box>Belum diupload!</Box>
    }else{
      return <Box><CardMedia component="img"alt="Strukture DKR"image={externalApi()+dataStructureDkr.image}title="Strukture DKR"/></Box>
    }
  }

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
            {imageStructureDkr()}
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
}