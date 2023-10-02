import React, { useState } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, Container, TableHead, TableRow, Paper, Typography, Box, Button } from "@mui/material"
import { externalApi } from "../utils/utils.js"
import ModalView from "./Admin/Agenda/ModalView"

export default function SkSaka(props) {
  const { dataSkSaka } = props
  const [dataPotensiSaka, setDataPotensiSaka] = useState([]);

  const viewDataPotensi = (saka_id) => {
    axios.get(externalApi()+'/api/data-potensi-saka/'+saka_id)
      .then(response => {
        setDataPotensiSaka(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

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
        SATUAN KARYA (SAKA)
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nama SAKA</TableCell>
            <TableCell align="left">SK SAKA</TableCell>
            <TableCell align="left">SK PINSAKA</TableCell>
            <TableCell align="left">Rincian</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSkSaka.map((row) => (
            <TableRow
              key={row.saka_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.document_sk_saka ? (
                  <Button href={externalApi() + row.document_sk_saka} target="_blank">
                    DOCUMENT
                  </Button>
                ) : (
                  <div>
                    BELUM DIUPLOAD
                  </div>
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.document_sk_pinsaka ? (
                  <Button href={externalApi() + row.document_sk_pinsaka} target="_blank">
                    DOCUMENT
                  </Button>
                ) : (
                  <div>
                    BELUM DIUPLOAD
                  </div>
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                <Box onClick={() => viewDataPotensi(row.saka_id)}>
                  <ModalView title="Data Potensi">
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Kwaran</TableCell>
                          <TableCell align="left">Total Anggota (PA)</TableCell>
                          <TableCell align="left">Total Anggota (PI)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dataPotensiSaka.map((row) => (
                          <TableRow
                            key={row.dkr_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.total_mens_member}</TableCell>
                            <TableCell align="left">{row.total_womens_member}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ModalView>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}