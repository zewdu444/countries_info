import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SettingsIcon from '@mui/icons-material/Settings';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '75%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function NavBar() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#00897b' }}>

        <Toolbar>
          <Box sx={{ disply: 'flex', flexDirection: 'row' }}>
            <IconButton
              sx={{ disply: 'flex', flexDirection: 'row' }}
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <ArrowBackIosIcon hidden />
            </IconButton>
            <Typography sx={{ disply: 'flex', flexDirection: 'row' }} variant="h6" component="span">
              2015
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            <Search sx={{
              display: 'flex',
              marginLeft: 'auto',
              marginRight: 'auto',

            }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{
            display: 'flex',
            marginLeft: 'auto',
          }}
          >
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
