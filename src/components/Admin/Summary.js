import * as React from 'react';

import { 
  Box, 
  Typography,
  ListItem,
  ListItemText,
  Grid
} from "@mui/material"

import {
  Home as HomeIcon
} from '@mui/icons-material';

export default function Summary() {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={6} md={3}>
        <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={8}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Coming soon"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="div"
                        variant="h5"
                        color="text.primary"
                        sx={{ mt: 1 }}
                        fontWeight="bold"
                      >
                        -
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item xs={4} md={4}>
              <HomeIcon sx={{ mt: 2, fontSize: 48 }} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}