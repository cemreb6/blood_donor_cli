import CustomFormSelect from "@/components/CustomFormSelect";
import Layout from "@/components/Layout";
import { SearchArea } from "@/components/SearchArea";
import { CustomOutlinedTextField } from "@/styles/appstyles";
import { BloodTypes } from "@/utils/Constants";
import { Button, Grid, Stack } from "@mui/material";
import { useRef } from "react";
import moment from "moment";
import AddIcon from '@mui/icons-material/Add';
import { getToken, getisHospital } from "@/services/SessionStorageManager";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

export default function AddBlood() {

    const router = useRouter();
    const bloodRef = useRef("");
    const unitsRef = useRef("");

      //  if (getToken()) {
         //   if (getisHospital() === "false") {
                const handleClick = () => {
                    //api call
                }
    
                return (
                    <Layout children={
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Stack>
                                    <CustomFormSelect label="Blood Type" list={Object.keys(BloodTypes)} obj={BloodTypes} onSelect={(v) => bloodRef.current = v} />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <SearchArea />
                            </Grid>
                            <Grid item xs={6}>
                                <Stack>
                                    <CustomOutlinedTextField
                                        label="Units"
                                        variant="outlined"
                                        type="number"
                                        inputProps={{
                                            min: 0
                                        }}
                                        onChange={(e) => { unitsRef.current = e.target.value }}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack>
                                    <CustomOutlinedTextField
                                        label="Donation Date"
                                        variant="outlined"
                                        type="text"
                                        inputProps={{
                                            min: 0
                                        }}
                                        disabled
                                        value={moment().format("DD.MM.YYYY")}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    endIcon={<AddIcon />}
                                    color="error"
                                    sx={{ width: '100%' }}
                                    onClick={handleClick()}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    } />
                )
          //  }
         /*  else {
                router.push("/RequestBlood");
            }*/
        //}
       /* else {
            router.push("/");
        }*/
    }


