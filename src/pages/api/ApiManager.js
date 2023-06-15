import { loginHospitalUrl } from "./ApiRoutes"
import { Post } from "./MakeRequest"

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

export const HandleLogin=async(email,password)=>{
   const response= await Post({email,password},loginHospitalUrl,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response;
}