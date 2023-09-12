import * as React from 'react';
import { AppBar, Container } from '@mui/material';
import { 
  Home as HomeIcon, 
  AccountCircle as AccountCircleIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon, 
  Bookmark as BookmarkIcon, 
  ContactPage as ContactPageIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material';
import { NavbarDesktop, NavbarMobile } from './NavbarComponent';

const pages = [
  {
    name: "Beranda",
    url: "/",
    icon: <HomeIcon fontSize="small" />
  },{
    name: "Tentang",
    url: "/about",
    icon: <ContactPageIcon fontSize="small" />
  },{
    name: "DKC",
    url: "/dkc",
    icon: <AccountCircleIcon fontSize="small" />
  },{
    name: "DKR",
    url: "/dkr",
    icon: <SupervisedUserCircleIcon fontSize="small" />
  },{
    name: "SAKA",
    url: "/saka",
    icon: <LightModeIcon fontSize="small" />
  },{
    name: "Pedoman",
    url: "/guide",
    icon: <BookmarkIcon fontSize="small" />
  }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        {/* Mobile */}
        <NavbarMobile 
          pages={pages} 
          handleCloseNavMenu={handleCloseNavMenu} 
          handleOpenNavMenu={handleOpenNavMenu}
          anchorElNav={anchorElNav}
        />
        
        {/* Desktop */}
        <NavbarDesktop pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;