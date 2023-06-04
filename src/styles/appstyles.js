import { FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const iconStyle={color:"var(--accent)"};

export const CustomFormControl = styled(FormControl)`
& .MuiOutlinedInput-root {
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--secondary);
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--secondary);
  }
}
& .MuiInputLabel-root {
    color: var(--accent);
  }`;

  export const CustomTextField = styled(TextField)`
  label.Mui-focused {
    color: var(--accent);
  }`;