import React, { useRef } from 'react';

import { Button, InputAdornment, Stack } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { bloodIcon } from '@/assets/icons';
import { CustomTextField, iconStyle } from '@/styles/appstyles';
import { useRouter } from 'next/router';


export default function Home() {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  
  const router=useRouter();

  const handleClick = () => {
    console.log(emailRef.current, passwordRef.current);
    router.push("/AddBlood");
  }
  return (
    <Stack direction="column" spacing={2} ml={15} mr={15} mt={10} alignItems="stretch">

      <div className="icon-wrapper">{bloodIcon}</div>
      <h3>blood donation</h3>

      <CustomTextField
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailRoundedIcon sx={iconStyle} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        type="email"
        onChange={(e) => emailRef.current = e.target.value}
        required
      />

      <CustomTextField
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <LockRoundedIcon sx={iconStyle} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        type="password"
        required
        onChange={(e) => passwordRef.current = e.target.value}
      />

      <Button variant="contained" endIcon={<LoginRoundedIcon />} color="error" onClick={handleClick}>
        Login
      </Button>
    </Stack>
  )
}
