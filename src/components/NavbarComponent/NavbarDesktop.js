import React, {Component} from 'react'
import { Box, Toolbar, Avatar, Button } from '@mui/material';
import { 
  NavigateNext as NavigateNextIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

class NavbarDesktop extends Component {
  render(){
    const { handleCloseNavMenu, pages } = this.props

    return (
      <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
        {/* Icon */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Avatar sx={{ mr: 1, width: 72, height: 72 }} src="/Logo.png" alt="Logo DKC" />
        </Box>

        {/* Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link className="link" to={page.url}>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: '#4040A1' }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {page.icon}
                  <span style={{ marginLeft: '10px' }}>
                    {page.name}
                  </span>
                </div>
              </Button>
            </Link>
          ))}
        </Box>

        {/* Login */}
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link className="link" to="/login">
            <Button sx={{ backgroundColor: '#4040A1' }} variant="contained" className="bg-primary">Login <NavigateNextIcon fontSize="medium" /></Button>
          </Link>
        </Box>
      </Toolbar>
    )
  }
}
export default NavbarDesktop;