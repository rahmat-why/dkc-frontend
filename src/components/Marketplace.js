import React from 'react'
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Box, Grid, Container } from "@mui/material"
import { externalApi } from "../utils/utils";

export default function Marketplace(props) {
  const { dataProduct } = props
  return (
    <Card sx={{ mt: 1, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <Container maxWidth="md">
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography 
              gutterBottom 
              variant="h6" 
              component="div" 
              fontWeight="bold"
              sx={{ marginTop: '20px' }}
            >
              MARKETPLACE
            </Typography>
            <Button sx={{ height: '30px', mt: 2, backgroundColor: '#4040A1' }} variant="contained">More</Button>
          </Box>

          <Grid container spacing={2}>
            {dataProduct.map((product, index) => (
              <Grid item md={4} xs={12} key={product.product_id} >
                <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={externalApi()+product.image}
                    title={product.image}
                  />
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="div" 
                      align='center'
                      fontWeight="bold"
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={product.link} target="_blank" sx={{ backgroundColor: '#4040A1' }} variant="contained" size="small" fullWidth>Checkout</Button>
                  </CardActions>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Container>
    </Card>
  );
}