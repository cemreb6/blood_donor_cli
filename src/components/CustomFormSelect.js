import { useState } from "react";

import { InputLabel, MenuItem, Select } from "@mui/material";

import { CustomFormControl } from "@/styles/appstyles";

export default function CustomFormSelect({ onSelect, list, label, obj }) {
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    onSelect(e.target.value);
    setSelected(e.target.value)
  }
  return (
    <>
      <CustomFormControl>
        <InputLabel>{label}</InputLabel>
        <Select value={selected} label={label} onChange={handleChange}>
          {list.length > 0 &&
            list.map(key => (
              <MenuItem value={obj? key: key.name}>{obj ? obj[key] : key.name}</MenuItem>
            ))}
        </Select>
      </CustomFormControl>

    </>
  );
}