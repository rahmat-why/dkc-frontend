import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Container, Typography } from '@mui/material';

export default function ProgramDkr(props) {
  const { dataProgramDkr } = props
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
            PROGRAM DKR
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Kegiatan</TableCell>
                  <TableCell align="center">Bulan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataProgramDkr.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell align="center">{row.program_name}</TableCell>
                    <TableCell align="center">{row.month}-{row.year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </CardContent>
    </Card>
  );
}