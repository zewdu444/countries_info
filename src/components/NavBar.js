import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SettingsIcon from '@mui/icons-material/Settings';
import MicNoneIcon from '@mui/icons-material/MicNone';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'teal' }}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            2015
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }} align="center">
            most views
          </Typography>

          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="mic"
            sx={{ mr: 1 }}
          >
            <MicNoneIcon />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="setting"
            sx={{ mr: 1 }}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
