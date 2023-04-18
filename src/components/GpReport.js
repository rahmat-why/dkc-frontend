import * as React from 'react';
import { 
  Card, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  Container, 
  TableHead, 
  TableRow, 
  Typography,
  Button
} from "@mui/material"
import { externalApi } from '../utils/utils';

export default function GpReport(props) {
  const { dataGpReport1, dataGpReport2 } = props

  return (
    <div>
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
              LAPORAN 01 GP
            </Typography>
            
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama Laporan</TableCell>
                  <TableCell align="left">Tahun Terbit</TableCell>
                  <TableCell align="left">File</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataGpReport1.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.year}</TableCell>
                    <TableCell align="left">
                      <Button href={externalApi()+row.document} target="_blank">
                        Document
                      </Button> 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </CardContent>
      </Card>
      
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
              LAPORAN 02 GP
            </Typography>
            
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nama Laporan</TableCell>
                  <TableCell align="left">Tahun Terbit</TableCell>
                  <TableCell align="left">File</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataGpReport2.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.year}</TableCell>
                    <TableCell align="left">
                      <Button href={externalApi()+row.document} target="_blank">
                        Document
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
}