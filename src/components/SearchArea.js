import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { CustomOutlinedTextField } from '@/styles/appstyles';
import { GetDonorList } from '@/pages/api/ApiManager';

export function SearchArea() {
    const [searchQuery, setSearchQuery] = useState('');
    const [matchedNames, setMatchedNames] = useState(["Cemre Bitgen","Emine Bitgen"]);

    useEffect(
        ()=>{
         /*   GetDonorList().then(response=>{
                if(response.progress){
                    setMatchedNames(response.data)
                }
            })*/
        },[]
    )
    const handleSearchChange = (event, value) => {
        setSearchQuery(value);
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
