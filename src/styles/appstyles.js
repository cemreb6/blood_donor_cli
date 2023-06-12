import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";

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
    color: var(--accent);
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
      color: var(--accent);
    }`;