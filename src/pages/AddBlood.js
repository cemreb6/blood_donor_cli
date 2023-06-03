import BloodTypeSelect from "@/components/BloodTypeSelect";
import Layout from "@/components/Layout";

export default function AddBlood(){
    return(
       <Layout children={ <BloodTypeSelect/>}/>
    );
}