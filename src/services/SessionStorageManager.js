export const setToken=(token)=>sessionStorage.setItem("token",token);
export const getToken=()=> sessionStorage.getItem("token");

export const setLoggedInStatus=(isLoggedIn)=>sessionStorage.setItem("loggedIn",isLoggedIn);
export const getLoggedInStatus=()=>sessionStorage.getItem("loggedIn");

export const setFullname=(name,surname)=>{
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("surname",surname);
};
export const getFullname=()=>{
    return (
        {
            name:sessionStorage.getItem("name"),
            surname:sessionStorage.getItem("surname"),
        }
    )
};

export const setEmail=(email)=>sessionStorage.setItem("email",email);
export const getEmail=()=>sessionStorage.getItem("email");

export const setUnits=(units)=>sessionStorage.setItem("units",JSON.stringify(units));
export const getUnits=()=>sessionStorage.getItem("units");

export const setHospitalName=(name)=>sessionStorage.setItem("hospitalName",name);
export const getHospitalName=()=>sessionStorage.getItem("hospitalName");

export const setHospitalId=(id)=>sessionStorage.setItem("hospitalId",id);
export const getHospitalId=()=>sessionStorage.getItem("hospitalId");

export const setisHospital=(isHospital)=>sessionStorage.setItem("isHospital",isHospital);
export const getisHospital=()=>sessionStorage.getItem("isHospital");

export const setcity=(city)=>sessionStorage.setItem("city",city);
export const getcity=()=>sessionStorage.getItem("city");

export const settown=(town)=>sessionStorage.setItem("town",town);
export const gettown=()=>sessionStorage.getItem("town");

export const setAuthenticatedUser=(data)=>{
        setToken(data.user.token);
        setFullname(data.user.name,data.user.surname);
        setEmail(data.user.email);
        setUnits({
            aPlusBloodUnit:data.hospital? data.hospital.aPlusBloodUnit : data.branch.aPlusBloodUnit,
            bPlusBloodUnit:data.hospital ? data.hospital.bPlusBloodUnit : data.branch.bPlusBloodUnit,
            abPlusBloodUnit:data.hospital ? data.hospital.abPlusBloodUnit : data.branch.abPlusBloodUnit,
            zeroPlusBloodUnit:data.hospital ? data.hospital.zeroPlusBloodUnit : data.branch.zeroPlusBloodUnit,
            aMinusBloodUnit:data.hospital ? data.hospital.aMinusBloodUnit :data.branch.aMinusBloodUnit ,
            bMinusBloodUnit:data.hospital ? data.hospital.bMinusBloodUnit : data.branch.bMinusBloodUnit,
            abMinusBloodUnit:data.hospital ? data.hospital.abMinusBloodUnit : data.branch.abMinusBloodUnit,
            zeroMinusBloodUnit:data.hospital ? data.hospital.zeroMinusBloodUnit : data.branch.zeroMinusBloodUnit,
        });
        setHospitalName(data.hospital ? data.hospital.name : "Branch");
        setHospitalId(data.hospital? data.hospital.id : data.branch.id);

        setisHospital(data.hospital !==null && data.hospital !==undefined);

        setcity(data?.branch?.city);
        settown(data?.branch?.town);

}