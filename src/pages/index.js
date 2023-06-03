import { Button, InputAdornment, Stack, TextField } from '@mui/material';

import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { bloodIcon } from '@/assets/icons';
import { iconStyle } from '@/styles/appstyles';

export default function Home() {
  return (
    <Stack direction="column" spacing={2} ml={15} mr={15} mt={10} alignItems="stretch">
      <div className="icon-wrapper">{bloodIcon}</div>
      <h3>blood donation</h3>
      <TextField
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
        required
      />
      <TextField
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRoundedIcon sx={iconStyle} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        type="password"
        required />
      <Button variant="contained" endIcon={<LoginRoundedIcon />} color="error">
        Login
      </Button>
    </Stack>
  )
}
