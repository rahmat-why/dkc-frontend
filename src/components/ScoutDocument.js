import * as React from 'react';
import { Table, TableBody, TableCell, Container, TableHead, TableRow, Paper, Typography, Button } from "@mui/material"
import { externalApi } from "./../utils/utils.js"

export default function ScoutDocument(props) {
  const { dataScoutDocument } = props

  return (
    <Container maxWidth="lg" component={Paper} sx={{ mt: 5, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <Typography 
        gutterBottom 
        align="center" 
        variant="h6" 
        component="div" 
        fontWeight="bold"
        sx={{ marginTop: '20px' }}
      >
        PEDOMAN GERAKAN PRAMUKA
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nama Pedoman</TableCell>
            <TableCell align="left">File</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataScoutDocument.map((row) => (
            <TableRow
              key={row.document_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <Button href={externalApi()+row.document} target="_blank">Unduh disini</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}