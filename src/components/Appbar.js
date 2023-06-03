import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';

export default function CustomAppbar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"var(--secondary)",color:"var(--neutral-black)"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="error"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <BloodtypeTwoToneIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
              blood donation
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}