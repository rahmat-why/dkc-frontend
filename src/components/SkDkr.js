import { Typography, Card, CardContent, Container, Button, Box } from '@mui/material'
import React from 'react'
import { externalApi } from "./../utils/utils.js"

export default function SkDkr(props) {
  const { dataSkDkr } = props
  
  const documentSkDkr = () => {
    if(dataSkDkr.document_sk_dkr == null) {
      return <Box>Belum diupload!</Box>
    }else{
      return <Button href={externalApi()+dataSkDkr.document_sk_dkr} target="_blank">Unduh disini</Button>
    }
  }

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
            {documentSkDkr()}
          </Typography>
        </Container>
      </CardContent>
    </Card>
  )
}