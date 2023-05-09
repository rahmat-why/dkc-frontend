import { Box, Container, Grid, Typography, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';
import { 
  Instagram as InstagramIcon, 
  YouTube as YoutubeIcon, 
  Facebook as FacebookIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Favorite as FavoriteIcon,
  Copyright as CopyrightIcon
} from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3, mt: 2 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <InstagramIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
          <YoutubeIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
          <FacebookIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
        </Box>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6} align="center">
            <CardMedia 
              component="img"
              alt="Logo DKC"
              image="/Footer.png"
              title="Logo DKC"
              sx={{ width: 192, height: 192 }}
            />
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <List sx={{ width: '100%', maxWidth: 360 }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="021xx" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="email@gmail" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Kab. Bogor" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 2 }}/>

        <Typography variant="subtitle1" sx={{ mt: 2 }} align="center" gutterBottom>
          <CopyrightIcon /> 2023 All right reserved by DKC Kab. Bogor with <FavoriteIcon />
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;