import React, { useState } from 'react'
import { Modal, Box, Typography, Divider, Button } from "@mui/material"
import { Close as CloseIcon } from '@mui/icons-material';
import { Settings as SettingsIcon } from '@mui/icons-material';

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

export default function ModalView({ children, title }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ height: '35px', backgroundColor: '#4040A1' }} size="small" variant="contained" onClick={handleClickOpen} endIcon={<SettingsIcon />}>
        View 
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        scroll="paper"
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
        </Box>
      </Modal>
    </div>
  );
}