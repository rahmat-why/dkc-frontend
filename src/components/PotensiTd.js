import React from 'react'
import { Card, CardContent, Typography } from "@mui/material"
import PieChart from "./PotensiTdComponent/PieChart"

export default function PotensiTd(props) {
  const { dataPotensi } = props
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
          POTENSI TD
        </Typography>

        <PieChart dataPotensi={dataPotensi} />
      </CardContent>
    </Card>
  );
}