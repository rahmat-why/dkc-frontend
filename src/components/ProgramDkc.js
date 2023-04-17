import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Card, CardContent, Divider } from "@mui/material"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const { dataProgram2023, dataProgram2024, dataProgram2025 } = props
  console.log([dataProgram2023, dataProgram2024, dataProgram2025])

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
          PROGRAM KERJA
        </Typography>
      </CardContent>

      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Program DKC Kab. Bogor"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Tahun 2023" {...a11yProps(0)} />
          <Tab label="Tahun 2024" {...a11yProps(1)} />
          <Tab label="Tahun 2025" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {dataProgram2023.map((row) => (
            <Box>
              <Typography variant="body1">
                {row.program_name}
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}/>
            </Box>
          ))}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {dataProgram2024.map((row) => (
            <Box>
              <Typography variant="body1">
                {row.program_name}
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}/>
            </Box>
          ))}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {dataProgram2025.map((row) => (
            <Box>
              <Typography variant="body1">
                {row.program_name}
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }}/>
            </Box>
          ))}
        </TabPanel>
      </Box>
    </Card>
  );
}