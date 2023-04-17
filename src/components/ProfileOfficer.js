import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Card, CardContent, Grid, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon 
} from '@mui/icons-material';

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

export default function ProfileOfficer(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { dataOfficer1, dataOfficer2, dataOfficer3, dataOfficer4, dataOfficer5 } = props

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
          PROFIL PENGURUS
        </Typography>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Profil Pengurus DKC Kab. Bogor">
              <Tab label="Unsur pimpinan" {...a11yProps(0)} />
              <Tab label="Bid. Kajian Kepramukaan" {...a11yProps(1)} />
              <Tab label="Bid. Kegiatan" {...a11yProps(2)} />
              <Tab label="Bid. Pembinaan dan Pengembangan" {...a11yProps(3)} />
              <Tab label="Bid. Penelitian dan Evaluasi" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {dataOfficer1.map((row) => (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={3} align="right">
                  <CardMedia 
                    component="img"
                    alt="Sambutan DKC Kab.Bogor"
                    image={row.image}
                    title="Sambutan DKC Kab.Bogor"
                  />
                </Grid>
                <Grid item xs={12} md={9} align="left">
                  <Typography variant="body1" fontWeight="bold">
                    {row.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                    {row.nta}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {row.stage_id} | {row.education} | {row.city}
                  </Typography>
                  
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InstagramIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.facebook} />
                    </ListItem>
                  </List>
                </Grid>  
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {dataOfficer2.map((row) => (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={3} align="right">
                  <CardMedia 
                    component="img"
                    alt="Sambutan DKC Kab.Bogor"
                    image={row.image}
                    title="Sambutan DKC Kab.Bogor"
                  />
                </Grid>
                <Grid item xs={12} md={9} align="left">
                  <Typography variant="body1" fontWeight="bold">
                    {row.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                    {row.nta}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {row.stage_id} | {row.education} | {row.city}
                  </Typography>
                  
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InstagramIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.facebook} />
                    </ListItem>
                  </List>
                </Grid>  
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {dataOfficer3.map((row) => (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={3} align="right">
                  <CardMedia 
                    component="img"
                    alt="Sambutan DKC Kab.Bogor"
                    image={row.image}
                    title="Sambutan DKC Kab.Bogor"
                  />
                </Grid>
                <Grid item xs={12} md={9} align="left">
                  <Typography variant="body1" fontWeight="bold">
                    {row.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                    {row.nta}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {row.stage_id} | {row.education} | {row.city}
                  </Typography>
                  
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InstagramIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.facebook} />
                    </ListItem>
                  </List>
                </Grid>  
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {dataOfficer4.map((row) => (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={3} align="right">
                  <CardMedia 
                    component="img"
                    alt="Sambutan DKC Kab.Bogor"
                    image={row.image}
                    title="Sambutan DKC Kab.Bogor"
                  />
                </Grid>
                <Grid item xs={12} md={9} align="left">
                  <Typography variant="body1" fontWeight="bold">
                    {row.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                    {row.nta}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {row.stage_id} | {row.education} | {row.city}
                  </Typography>
                  
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InstagramIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.facebook} />
                    </ListItem>
                  </List>
                </Grid>  
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {dataOfficer5.map((row) => (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={3} align="right">
                  <CardMedia 
                    component="img"
                    alt="Sambutan DKC Kab.Bogor"
                    image={row.image}
                    title="Sambutan DKC Kab.Bogor"
                  />
                </Grid>
                <Grid item xs={12} md={9} align="left">
                  <Typography variant="body1" fontWeight="bold">
                    {row.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }} fontWeight="light">
                    {row.nta}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {row.stage_id} | {row.education} | {row.city}
                  </Typography>
                  
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InstagramIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.facebook} />
                    </ListItem>
                  </List>
                </Grid>  
              </Grid>
            ))}
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}