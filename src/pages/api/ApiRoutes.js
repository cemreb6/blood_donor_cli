const baseUrl="https://blooddonorapigateway20230611141343.azurewebsites.net/api/v1";

const userBase=baseUrl.concat("/User");
const donorBase=baseUrl.concat("/Donor");
const bloodBase=baseUrl.concat("/BloodRequest");

export const loginHospitalUrl=userBase.concat("/LoginToHospital");
export const loginBranchUrl=userBase.concat("/LoginToBranch");
export const registerToBranchUrl=userBase.concat("/RegisterToBranch")
export const registerToHospitalUrl=userBase.concat("/RegisterToHospital");

export const addDonorUrl=donorBase.concat("/Add");
export const findDonorUrl=donorBase.concat("/Find");
export const donateUrl=donorBase.concat("/Donate");

export const requestBloodUrl=bloodBase.concat("/RequestBlood");