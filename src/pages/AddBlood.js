import { useEffect, useRef, useState } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

import CustomFormSelect from "@/components/CustomFormSelect";
import Layout from "@/components/Layout";
import { CustomOutlinedTextField } from "@/styles/appstyles";
import { BloodTypes } from "@/utils/Constants";
import ImageUploader from "@/components/ImageUploader";
import AddIcon from '@mui/icons-material/Add';
import { GetCities, GetTowns } from "./api/ApiManager";

export default function AddBlood() {
    const [cityList, setCityList] = useState("");
    const [townList, setTownList] = useState("");

    const nameRef = useRef("");
    const phoneNumberRef = useRef("");
    const townRef = useRef("");
    const cityRef = useRef("");
    const bloodRef = useRef("");

    useEffect(
        ()=>{
            setCityList(GetCities());
            setTownList(GetTowns());
        },[]
    )
    return (
        <Layout children={
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Stack spacing={2}>
                        <CustomOutlinedTextField
                            label="Full Name"
                            variant="outlined"
                            type="text"
                            onChange={(e) => { nameRef.current = e.target.value }}
                        />
                        <CustomFormSelect label="Blood Type" list={Object.keys(BloodTypes)} obj={BloodTypes} onSelect={(v) => bloodRef.current = v} />
                        <CustomFormSelect label="City" list={cityList} onSelect={(v) => cityRef.current = v} />
                        <CustomFormSelect label="Town" list={townList} onSelect={(v) => townRef.current = v} />
                        <CustomOutlinedTextField
                            label="Phone Number"
                            variant="outlined"
                            type="text"
                            onChange={(e) => { phoneNumberRef.current = e.target.value }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <ImageUploader />
                </Grid>
                <Grid item xs={12}>
                <Button
            variant="contained"
            endIcon={<AddIcon />}
            color="error"
            sx={{ width: '100%' }} // Set width to 100%
          >
            Add
          </Button>
                </Grid>
            </Grid>
        } />
    );
}