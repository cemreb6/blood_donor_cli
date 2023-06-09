import { useEffect, useRef, useState } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CustomFormSelect from "@/components/CustomFormSelect";
import Layout from "@/components/Layout";
import { CustomOutlinedTextField } from "@/styles/appstyles";
import { BloodTypes } from "@/utils/Constants";
import ImageUploader from "@/components/ImageUploader";
import { GetCities, GetDonorList, GetTowns, HandleAddDonor } from "./api/ApiManager";
import DonorTable from "@/components/DonorTable";

export default function AddDonor() {
    const [donors, setDonors] = useState([]);
    
    useEffect (
        () => {
            GetDonorList().then(response => {
                if(response.data.length>0){
                    setDonors(response.data);
                }
            })
        }, [])
  
            const handleAddDonor = (name,phoneNumber,town,city,blood,image) => {
                console.log(name,phoneNumber,town,city,blood,image)
                HandleAddDonor(blood,image,name,phoneNumber,city,town).then(response=>{
                    console.log(response);
                });
            }
            return (
                <Layout children={
                    <>
                        <AddDonorAccordion onClick={handleAddDonor} />
                        <DonorTable donors={donors} onDelete={() => { }} onEdit={() => { }} />
                    </>
                } />
            );
        }
     
const AddDonorAccordion = ({ onClick }) => {
    const [cityList, setCityList] = useState("");
    const [townList, setTownList] = useState("");

    const nameRef = useRef("");
    const phoneNumberRef = useRef("");
    const townRef = useRef("");
    const cityRef = useRef("");
    const bloodRef = useRef("");
    const imageRef=useRef(null);

    useEffect(
        () => {
            setCityList(GetCities());
            setTownList(GetTowns());
        }, []
    )

    const handleClick = (e) => {
        onClick(nameRef.current,phoneNumberRef.current,townRef.current,cityRef.current,bloodRef.current,imageRef.current);
    }
    return (
        <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel-content" id="panel-header">
                <Typography variant="h6">Add Donor</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                        <ImageUploader setImage={(x)=>imageRef.current=x}/>
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
            </AccordionDetails>
        </Accordion>

    );
}

