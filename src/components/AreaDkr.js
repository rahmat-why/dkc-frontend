import React from 'react'
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
          {children}
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

export default function AreaDkr(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { dataDkr1, dataDkr2, dataDkr3, dataDkr4, dataDkr5 } = props

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
              <Tab label="Wilayah 2" {...a11yProps(1)} />
              <Tab label="Wilayah 3" {...a11yProps(2)} />
              <Tab label="Wilayah 4" {...a11yProps(3)} />
              <Tab label="Wilayah 5" {...a11yProps(4)} />
            </Tabs>
          </Box>
          
          <Container maxWidth="lg">
            <TabPanel value={value} index={0}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {dataDkr1.map((dkr, index) => (
                  <Grid item xs={6} md={3} align="center" key={dkr.dkr_id}>
                    <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                      <Link to={`/dkr/${dkr.dkr_id}`} className="link">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={dkr.name}
                          />
                          <NavigateNextIcon fontSize="medium" />
                        </ListItem>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {dataDkr2.map((dkr, index) => (
                  <Grid item xs={6} md={3} align="center" key={dkr.dkr_id}>
                    <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                      <Link to={`/dkr/${dkr.dkr_id}`} className="link">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={dkr.name}
                          />
                          <NavigateNextIcon fontSize="medium" />
                        </ListItem>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {dataDkr3.map((dkr, index) => (
                  <Grid item xs={6} md={3} align="center" key={dkr.dkr_id}>
                    <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                      <Link to={`/dkr/${dkr.dkr_id}`} className="link">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={dkr.name}
                          />
                          <NavigateNextIcon fontSize="medium" />
                        </ListItem>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {dataDkr4.map((dkr, index) => (
                  <Grid item xs={6} md={3} align="center" key={dkr.dkr_id}>
                    <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                      <Link to={`/dkr/${dkr.dkr_id}`} className="link">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={dkr.name}
                          />
                          <NavigateNextIcon fontSize="medium" />
                        </ListItem>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={4}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {dataDkr5.map((dkr, index) => (
                  <Grid item xs={6} md={3} align="center" key={dkr.dkr_id}>
                    <Box sx={{ border: '1px solid #cacaca', p: 1, borderRadius: "12px", mt: 2, maxWidth: 180 }}>
                      <Link to={`/dkr/${dkr.dkr_id}`} className="link">
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={dkr.name}
                          />
                          <NavigateNextIcon fontSize="medium" />
                        </ListItem>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Container>

        </Box>
      </CardContent>
    </Card>
  );
}