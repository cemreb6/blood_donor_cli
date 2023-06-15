import React, { useEffect, useRef, useState } from 'react';

import { Button, InputAdornment, Stack } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Alert from '@mui/material/Alert';

import { bloodIcon } from '@/assets/icons';
import { CustomTextField, iconStyle } from '@/styles/appstyles';
import { useRouter } from 'next/router';
import { HandleLogin } from './api/ApiManager';
import { isNullOrEmpty } from '@/utils/InputValidator';
import { getToken, setAuthenticatedUser } from '@/services/SessionStorageManager';
import { Spinner } from '@/components/Spinner/Spinner';

export default function Home() {

  const [onAlert, setOnAlert] = useState({ state: false, message: "" });
  const [loading,setLoading]=useState(true);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const router = useRouter();

  useEffect(
    ()=>{
 
      const token=getToken();
      if(token){
        router.push("/AddBlood");
      }
      setLoading(false);
    },[]
  )
  const handleClick = async () => {
    try {
      setLoading(true);
      setOnAlert({ state: false, message: "" })
      if (!isNullOrEmpty(emailRef.current) && !isNullOrEmpty(passwordRef.current)) {
        const response = await HandleLogin(emailRef.current, passwordRef.current);
        if (response.progress) {
          setAuthenticatedUser(response.data);
          router.push("/AddBlood");
        }
        else {
          setOnAlert({ state: true, message: response.message })
        }
      }
      else {
        setOnAlert({ state: true, message: "Fields cannot be empty!" })
      }
    } catch (err) {
      setOnAlert({ state: true, message: err.message })
    }
    setLoading(false);
  }

  return (
    <Stack direction="column" spacing={2} ml={15} mr={15} mt={10} alignItems="stretch">
      {
        loading && 
        <Spinner/>
      }
      <div className="icon-wrapper">{bloodIcon}</div>
      <h3>blood donation</h3>

      {
        onAlert.state &&
        <Alert severity="error">
          {onAlert.message}
        </Alert>
      }

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
