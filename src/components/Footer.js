import { Button, Box, Container, Grid, Typography, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';
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
const TiktokIcon = () => {
  return (
    <svg
      fill="#4040A1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={32}
      height={32}
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

function Footer() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3, mt: 2 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Button href="https://www.instagram.com/dkc_kabupatenbogor" target="_blank">
            <TiktokIcon sx={{ p: 1 }} />
          </Button>
          <Button href="https://www.instagram.com/dkc_kabupatenbogor" target="_blank">
            <InstagramIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
          </Button>
          <Button href="https://www.youtube.com/@dkckabupatenbogor3106" target="_blank">
            <YoutubeIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
          </Button>
          <Button href="https://m.facebook.com/profile.php?id=100009767019698" target="_blank">
            <FacebookIcon style={{ color: '#4040A1', width: 32, height: 32 }} sx={{ p: 1 }} />
          </Button>
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
                <ListItemText primary="(021) 87902554" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="dkc.kabbogor@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Graha Pandu Jl. Segar III Komplek Pemkab Bogor Kel. Tengah" />
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