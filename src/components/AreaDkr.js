import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Card, CardContent, ListItem, ListItemText, Container, Grid } from '@mui/material';
import { 
  NavigateNext as NavigateNextIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AreaDkr() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ mt: 3, borderRadius: 5, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
      <Typography 
          gutterBottom 
          align="center" 
          variant="h6" 
          component="div" 
          fontWeight="bold"
          sx={{ marginTop: '20px' }}
        >
          DKR
        </Typography>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="DKR Kab. Bogor">
              <Tab label="Wilayah 1" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          
          <Container maxWidth="lg">
            <TabPanel value={value} index={0}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} md={3} align="center">
                  <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary="Parungpanjang"
                      />
                      <NavigateNextIcon fontSize="medium" />
                    </ListItem>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3} align="center">
                  <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                    <Link to="/dkr/Tenjo" className="link">
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary="Tenjo"
                        />
                        <NavigateNextIcon fontSize="medium" />
                      </ListItem>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Container>

        </Box>
      </CardContent>
    </Card>
  );
}