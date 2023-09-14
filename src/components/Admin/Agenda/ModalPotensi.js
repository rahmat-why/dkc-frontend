import React from 'react'
import { Modal, Box, Typography, Divider, Button } from "@mui/material"

import { 
  Close as CloseIcon
} from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowY: "scroll", 
  maxHeight: "90%"
};

export default function ModalPotensi({ children, title, handleSubmit, open, handleClose, handleExport }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ mb: 4 }} fontWeight="bold">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div" 
                fontWeight="bold"
              >
                {title}
              </Typography>
              <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
            </Box>
            <Divider />
          </Typography>
          {children}
          
          <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
            <Divider />
            <Button onClick={handleSubmit} sx={{ backgroundColor: '#4040A1', mt: 2 }} variant="contained">Save</Button>
            <Button onClick={handleExport} sx={{ backgroundColor: 'red', mt: 2, ml: 1 }} variant="contained">Export</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}