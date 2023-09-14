import * as React from 'react';
import { Table, TableBody, TableCell, Container, TableHead, TableRow, Paper, Typography, Button } from "@mui/material"
import { externalApi, formatDate } from "../utils/utils.js"

export default function ReportSaka(props) {
  const { dataReportSaka } = props

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
        LAPORAN SAKA
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nama Laporan</TableCell>
            <TableCell align="left">Tanggal Terbit</TableCell>
            <TableCell align="left">Document</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataReportSaka.map((row) => (
            <TableRow
              key={row.saka_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {formatDate(row.report_date)}
              </TableCell>
              <TableCell component="th" scope="row">
                <Button href={externalApi()+row.document} target="_blank">
                  Document
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}