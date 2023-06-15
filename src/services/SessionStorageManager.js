export const setToken=(token)=>sessionStorage.setItem("token",token);
export const getToken=()=> sessionStorage.getItem("token");

export const setLoggedInStatus=(isLoggedIn)=>sessionStorage.setItem("loggedIn",isLoggedIn);
export const getLoggedInStatus=()=>sessionStorage.getItem("loggedIn");

export const setFullname=(name,surname)=>sessionStorage.setItem("fullname",`${name} ${surname}`);
export const getFullname=()=>sessionStorage.getItem("fullname");

export const setEmail=(email)=>sessionStorage.setItem("email",email);
export const getEmail=()=>sessionStorage.getItem("email");

export const setUnits=(units)=>sessionStorage.setItem("units",JSON.stringify(units));
export const getUnits=()=>sessionStorage.getItem("units");

export const setHospitalName=(name)=>sessionStorage.setItem("hospitalName",name);
export const getHospitalName=()=>sessionStorage.getItem("hospitalName");

export const setAuthenticatedUser=(data)=>{
        setToken(data.user.token);
        setFullname(data.user.name,data.user.surname);
        setEmail(data.user.email);
        setUnits({
            aPlusBloodUnit:data.hospital.aPlusBloodUnit,
            bPlusBloodUnit:data.hospital.bPlusBloodUnit,
            abPlusBloodUnit:data.hospital.abPlusBloodUnit,
            zeroPlusBloodUnit:data.hospital.zeroPlusBloodUnit,
            aMinusBloodUnit:data.hospital.aMinusBloodUnit,
            bMinusBloodUnit:data.hospital.bMinusBloodUnit,
            abMinusBloodUnit:data.hospital.abMinusBloodUnit,
            zeroMinusBloodUnit:data.hospital.zeroMinusBloodUnit,
        });
        setHospitalName(data.hospital.name)
}