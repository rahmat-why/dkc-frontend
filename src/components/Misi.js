import React from 'react'
import { Card, CardContent, Typography, Grid, CardMedia, List, ListItem } from "@mui/material"

export default function Misi(props) {
  const { dataMisi } = props
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
          MISI
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={9} align="left">
            <List>
              {dataMisi.map((misi, index) => (
                <Typography variant="body1" gutterBottom key={misi.goal_id}>
                  {misi.description}
                </Typography>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={3} align="left">
            <CardMedia 
              component="img"
              alt="Misi DKC"
              image="/misi.jpg"
              title="Misi DKC"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}