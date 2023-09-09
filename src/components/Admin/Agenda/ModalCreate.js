import React, { useState } from 'react'
import { Modal, Box, Typography, Divider, Button, IconButton } from "@mui/material"

import { 
  Close as CloseIcon,
  Add as AddIcon,
  CloudUpload as CloudUploadIcon,
  Edit as EditIcon
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

export default function ModalCreate({ children, title, handleSubmit, type, handleUpdate }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    if(handleUpdate) {
      handleUpdate();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const textButton = (type) => {
    if(type === "ADD") {
      return <Box><IconButton><AddIcon fontSize='small' sx={{ color: "#fff" }} /></IconButton>Add</Box>
    }else if(type === "UPLOAD"){
      return <Box><IconButton><CloudUploadIcon fontSize='small' sx={{ color: "#fff" }} /></IconButton>Upload</Box>
    }else{
      return <Box><IconButton><EditIcon fontSize='small' sx={{ color: "#fff" }} /></IconButton>Update</Box>
    }
  }

  return (
    <div>
      <Box>
        <Button sx={{ height: '35px', mt: 2, backgroundColor: '#4040A1' }} variant="contained" onClick={handleClickOpen}>
          {textButton(type)}
        </Button>
      </Box>

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
            <form onSubmit={handleSubmit}>
              <Divider />
              <Button sx={{ backgroundColor: '#4040A1', mt: 2 }} variant="contained" type="submit">Save</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}