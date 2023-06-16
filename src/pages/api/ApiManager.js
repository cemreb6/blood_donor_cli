import { getFullname, getHospitalId, getToken } from "@/services/SessionStorageManager"
import { addDonorUrl, donorlistUrl, loginBranchUrl, loginHospitalUrl } from "./ApiRoutes"
import { Post, PostMultiDataForm } from "./MakeRequest"

export const GetCities=()=>{
    return(
        [{id:1,name:"İzmir"},
        {id:2,name:"Ankara"},
        {id:3,name:"İstanbul"},]
    )
}

export const GetTowns=()=>{
    return(
        [{id:1,name:"Konak"},
        {id:2,name:"Alsancak"},
        {id:3,name:"Beşiktaş"},]
    )
}

export const HandleLogin=async(email,password,isHospital)=>{
    const url= isHospital? loginHospitalUrl : loginBranchUrl;
   const response= await Post({email,password},url,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response;
}

export const GetDonorList=async()=>{
    const response= await Post({id:parseInt(getHospitalId())},donorlistUrl,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer " + getToken(),
        }
    });
    return response;
}

export const HandleAddDonor=async(bloodType,photo,fullname,phone,city,town)=>{
   try{
    var array = fullname.split(" ")
    let formData=new FormData();
    formData.append("branchId",getHospitalId());
    formData.append("name",array[0]);
    formData.append("surname",array.length>1 ? array[1] : "");
    formData.append("bloodType",bloodType);
    formData.append("phone",phone);
    formData.append("city",city);
    formData.append("town",town);
    formData.append("photo",photo);
    console.log(formData);
    return await PostMultiDataForm(formData,addDonorUrl,{
        headers: {
            'Content-Type': "multipart/form-data",
            'Authorization': "bearer " + getToken(),
        },
    })
   }catch(err){
    console.log(err);
   }
}