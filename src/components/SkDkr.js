import { Typography, Card, CardContent, Container, Button } from '@mui/material'
import React from 'react'

export default function SkDkr(props) {
  return (
    <Card sx={{ mt: 1, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
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
            SK DKR
          </Typography>
          
          <Typography align="center">
            <Button href="" target="_blank">
              Unduh disini
            </Button>
          </Typography>
        </Container>
      </CardContent>
    </Card>
  )
}