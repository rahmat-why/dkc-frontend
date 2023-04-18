import React, { useState } from 'react'
import axios from 'axios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Typography, 
  Card, 
  CardContent, 
  List, 
  Box, 
  TextField, 
  CardMedia,
  MenuItem,
  Button
} from "@mui/material"
import ModalCreate from "./Agenda/ModalCreate"
import MenuTooltip from "./Agenda/MenuTooltip"
import { externalApi } from "./../../utils/utils.js"

export default function Marketplace(props) {
  const { dataProduct } = props

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name) errors.name = 'Nama produk harus diisi!';
    if (!link) errors.link = 'Link redirect harus diisi!';
    if (!image) errors.nta = 'Image harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('link', link);

    if (window.confirm("Apakah anda yakin ingin menyimpan data ini?")) {
      try {
        axios.post(externalApi()+'/api/products', formData)
        .then(response => window.alert("Data berhasil ditambah!"))
        .catch(error => window.alert("Terjadi kesalahan! data gagal ditambah!"));
      } catch (error) {
        console.error(error);
      }

      window.location.reload()
    }
  }

  const handleDelete = async (product_id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      axios.delete(externalApi()+'/api/products/'+product_id)
      .then(response => window.alert("Data berhasil dihapus!"))
      .catch(error => window.alert("Terjadi kesalahan! data gagal dihapus!"));

      window.location.reload()
    }
  }

  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, pl: 2, pr: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography 
                gutterBottom 
                align="center" 
                variant="h6" 
                component="div" 
                fontWeight="bold"
                sx={{ marginTop: '20px' }}
              >
                MARKETPLACE
              </Typography>
              <ModalCreate handleSubmit={handleSubmit} title="Upload Produk" type="UPLOAD">
                <TextField
                  label="Nama Produk*"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ''}
                />
                <TextField
                  label="Link Redirect*"
                  variant="outlined"
                  fullWidth
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  error={!!errors.link}
                  helperText={errors.link ? errors.link : ''}
                  sx={{ mt: 3 }}
                  InputProps={{
                    placeholder: 'Awali dengan https://',
                  }}
                />
                <TextField
                  label="Image*"
                  type="file"
                  variant="outlined"
                  fullWidth
                  onChange={handleFileChange}
                  error={!!errors.image}
                  helperText={errors.image ? errors.image : ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mt: 3 }}
                />
              </ModalCreate>
            </Box>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Nama</TableCell>
                  <TableCell align="left">Link</TableCell>
                  <TableCell align="left">#</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataProduct.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <CardMedia
                        sx={{ height: 140, width: 100 }}
                        image={externalApi()+row.image}
                        title={row.name}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                      <Button href={row.link} target="_blank">
                        Link
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <MenuTooltip>
                        <MenuItem onClick={() => handleDelete(row.product_id)}>Delete</MenuItem>
                      </MenuTooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </List>
      </CardContent>
    </Card>
  );
}