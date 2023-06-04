import { useState } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { BloodTypes } from "@/utils/Constants";
import { CustomFormControl } from "@/styles/appstyles";

export default function BloodTypeSelect({ onSelect }) {
    const [bloodType, setBloodType] = useState(BloodTypes.AB_positive);

    const handleChange = (e) => {
        //onSelect(e.target.value);
        setBloodType(e.target.value)
    }
    return (
        <CustomFormControl>
          <InputLabel>Blood Type</InputLabel>
          <Select value={bloodType} label="Blood Type" onChange={handleChange}>
            {Object.keys(BloodTypes).map(key => (
              <MenuItem value={key}>{BloodTypes[key]}</MenuItem>
            ))}
          </Select>
        </CustomFormControl>
      );
}