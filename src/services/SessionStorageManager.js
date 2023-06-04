export const setToken=(token)=>sessionStorage.setItem("token",token);
export const getToken=()=> sessionStorage.getItem("token");

export const setLoggedInStatus=(isLoggedIn)=>sessionStorage.setItem("loggedIn",isLoggedIn);
export const getLoggedInStatus=()=>sessionStorage.getItem("loggedIn");