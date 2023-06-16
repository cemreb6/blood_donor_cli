import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import { useRouter } from 'next/router';
import { getisHospital } from '@/services/SessionStorageManager';
import { TooltipButton } from './TooltipButton';

export default function CustomAppbar() {

  const [isHospital,setIsHospital] = React.useState("");

  React.useEffect(
    ()=>{
      if(isHospital===""){
        setIsHospital(getisHospital());
      }
    },[]
  )
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/");
  }

  const onAddBlood=()=>{
    isHospital==="false" && router.push("/AddBlood")
  }

  const onAddDonor=()=>{
    console.log(!isHospital);
    isHospital==="false" && router.replace("/AddDonor")
  }

  const onRequestBlood=()=>{
    isHospital==="true" && router.push("/RequestBlood")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "var(--secondary)", color: "var(--neutral-black)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="error"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BloodtypeTwoToneIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
            blood donation &nbsp;
            <TooltipButton
            onClick={onAddBlood}
            text={"Add Blood"}
            title={"Branch only"}/>
            |
            <TooltipButton
             onClick={onAddDonor}
            text="Add Donor"
            title={"Branch only"}
            />
            |
            <TooltipButton
             onClick={onRequestBlood}
            text="Request Blood"
            title={"Hospital only"}
            />
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}