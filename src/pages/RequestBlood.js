import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { Button, Grid, Stack } from "@mui/material";

import CustomFormSelect from "@/components/CustomFormSelect";
import Layout from "@/components/Layout";
import { BloodTypes } from "@/utils/Constants";
import { GetCities, GetTowns } from "./api/ApiManager";
import { CustomOutlinedTextField } from "@/styles/appstyles";
import { getToken, getisHospital } from "@/services/SessionStorageManager";


export default function RequestBlood() {
    const [cityList, setCityList] = useState("");
    const [townList, setTownList] = useState("");

    const router = useRouter();

    if (getToken()) {
        if (getisHospital() === "true") {
            const bloodRef = useRef("");
            const townRef = useRef("");
            const cityRef = useRef("");
            const emailRef = useRef("");
            const numUnitsRef = useRef("");
            const durationTimeRef = useRef("");
            const reasonRef = useRef("");

            useEffect(
                () => {
                    setCityList(GetCities());
                    setTownList(GetTowns());
                }, []
            )
            return (
                <Layout children={
                    <Grid container spacing={1}>
                        <Grid item xs={6} >
                            <Stack>
                                <CustomFormSelect label="Blood Type" list={Object.keys(BloodTypes)} obj={BloodTypes} onSelect={(v) => bloodRef.current = v} />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <CustomFormSelect label="City" list={cityList} onSelect={(v) => cityRef.current = v} />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <CustomOutlinedTextField
                                    label="Email"
                                    variant="outlined"
                                    type="text"
                                    onChange={(e) => { emailRef.current = e.target.value }}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <CustomFormSelect label="Town" list={townList} onSelect={(v) => townRef.current = v} />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <CustomOutlinedTextField
                                    label="Number of Units"
                                    variant="outlined"
                                    type="number"
                                    inputProps={{
                                        min: 0
                                    }}
                                    onChange={(e) => { numUnitsRef.current = e.target.value }}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <CustomOutlinedTextField
                                    label="Duration of Search Days"
                                    variant="outlined"
                                    type="number"
                                    inputProps={{
                                        min: 0
                                    }}
                                    onChange={(e) => { durationTimeRef.current = e.target.value }}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack>
                                <CustomOutlinedTextField
                                    label="Reason"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    onChange={(e) => { reasonRef.current = e.target.value }}
                                />
                            </Stack>
                        </Grid>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ width: '100%', marginTop: "10px", marginLeft: "8px" }}  >
                            Request
                        </Button>
                    </Grid>
                } />
            );
        }
        else {
            router.push("/AddBlood");
        }
    } else {
        router.push("/");
    }
}
