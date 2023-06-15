import { FormControl, Switch, TextField } from "@mui/material";
import { styled,alpha } from "@mui/system";
import { pink } from '@mui/material/colors';
export const iconStyle={color:"var(--accent)"};

export const CustomFormControl = styled(FormControl)`
& .MuiOutlinedInput-root {
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--secondary);
    color: var(--accent);
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--secondary);
    color: var(--accent);
  }
}
& .MuiInputLabel-root {
    color: var(--text-color);
  }`;

  export const CustomTextField = styled(TextField)`
  label.Mui-focused {
    color: var(--accent);
  }`;

  export const CustomOutlinedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: var(--secondary);
      color: var(--accent);
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: var(--secondary);
      color: var(--accent);
    }
  }
  & .MuiInputLabel-root {
      color: var(--text-color);
    }`;

    export const PinkSwitch = styled(Switch)(({ theme }) => ({
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
          backgroundColor: alpha(pink[600], 1),
        },
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
      },
    }));