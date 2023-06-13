import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { CustomOutlinedTextField } from '@/styles/appstyles';

export function SearchArea() {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchedNames, setMatchedNames] = useState([]);

    const handleSearchChange = (event, value) => {
        setSearchQuery(value);
        //api call
        setMatchedNames(["Cemre Bitgen","Emine Bitgen"])
    };

    return (
        <Autocomplete
            freeSolo
            options={matchedNames}
            renderInput={(params) => (
                <CustomOutlinedTextField
                    {...params}
                    label="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            )}
        />
    );
};
