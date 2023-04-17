import * as React from 'react';

import { 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Grid, 
  CardMedia,
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Box
} from "@mui/material"

import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Bookmark as BookmarkIcon,
  Person as PersonIcon,
  Group as GroupIcon,
  Folder as FolderIcon,
  ExitToApp as ExitToAppIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const pages = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: <DashboardIcon />,
    auth: "DKC"
  },
  {
    name: "Beranda",
    url: "/admin/home",
    icon: <HomeIcon />,
    auth: "DKC"
  },
  {
    name: "Tentang",
    url: "/admin/about",
    icon: <BookmarkIcon />,
    auth: "DKC"
  },
  {
    name: "DKC",
    url: "/admin/dkc",
    icon: <PersonIcon />,
    auth: "DKC"
  },
  {
    name: "DKR",
    url: "/admin/dkr",
    icon: <GroupIcon />,
    auth: "DKC"
  },
  {
    name: "Pedoman",
    url: "/admin/guide",
    icon: <FolderIcon />,
    auth: "DKC"
  },
  {
    name: "Struktur Organisasi",
    url: "/admin/structure-dkr",
    icon: <DashboardIcon />,
    auth: "DKR"
  },
  {
    name: "SK DKR",
    url: "/admin/sk-dkr",
    icon: <HomeIcon />,
    auth: "DKR"
  },
  {
    name: "Program Kerja",
    url: "/admin/program-dkr",
    icon: <BookmarkIcon />,
    auth: "DKR"
  },
  {
    name: "Data Potensi",
    url: "/admin/data-potensi",
    icon: <DashboardIcon />,
    auth: "DKR"
  },
  {
    name: "Laporan GP",
    url: "/admin/gp-report",
    icon: <BookmarkIcon />,
    auth: "DKR"
  },
]

const drawerWidth = 250;

// const auth = () => {
//   var login = "DKC"
//   return login
// }

export default function Sidebar(props) {
  const { page } = props
  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent" elevation={0}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, mt: 2 }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div" fontWeight="bold">
            {page}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{style: {border: 'none'}}}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ 
          border: '1px solid #cacaca', 
          p: 1, 
          borderRadius: "12px", 
          mt: 2,
          ml: 1
         }}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={3} md={3}>
              <CardMedia 
                component="img"
                alt="Logo DKC"
                image="/Logo.png"
                title="Logo DKC"
                sx={{ width: 72, height: 72 }}
              />
            </Grid>
            <Grid item xs={9} md={9}>
              <Typography variant="body1" fontWeight="bold"  sx={{ mt: 2, ml: 2 }}>
                DKC KABUPATEN BOGOR
              </Typography>
            </Grid>
          </Grid>

          <List>
            {pages.map((page, index) => (
              <Link className="link" to={page.url}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#4040A1' }}>
                      {page.icon}
                    </ListItemIcon>
                    <ListItemText primary={page.name} sx={{ color: '#4040A1', ml: -2 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Link className="link" to="/logout">
              <ListItem disablePadding sx={{ mt: 10 }}>
                <ListItemButton sx={{ 
                  backgroundColor: '#4040A1', 
                  borderRadius: "10px",
                  '&:hover': {
                    backgroundColor: '#4040A1',
                    boxShadow: 'none',
                  }  
                }}>
                  <ListItemIcon sx={{ color: '#ffff' }}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ color: '#ffff', ml: -2 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}