export const getUserAccessCodes = () => {
  let userAccessCodes: string[] = [];
  let codes = localStorage.getItem("userAccessCodes");
  if (codes) userAccessCodes = codes.split(",");
  return userAccessCodes;
};
