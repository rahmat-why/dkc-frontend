import React, {Component} from 'react'
import { Box, Toolbar, IconButton, Typography, Menu, Avatar, MenuItem } from '@mui/material';
import { 
  Menu as MenuIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

class NavbarMobile extends Component {
  render(){
    const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages } = this.props

    return (
      <Toolbar sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Link className="link text-primary" to={page.url} key={page.name}>
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page.icon}
                    <span style={{ marginLeft: '10px' }}>
                      {page.name}
                    </span>
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>

        {/* Icon */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Avatar sx={{ mr: 1, width: 64, height: 64 }} src="/Logo.png" alt="Logo DKC" />
        </Box>
        
        {/* Logo */}
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <h4>Kab. Bogor</h4>
        </Box>
        
      </Toolbar>
    )
  }
}
export default NavbarMobile;