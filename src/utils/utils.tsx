export const getUserAccessCodes = () => {
  let userAccessCodes: string[] = [];
  let codes = localStorage.getItem("userAccessCodes");
  if (codes) userAccessCodes = codes.split(",");
  return userAccessCodes;
};

export const getCodes = () => {
  const codes = localStorage.getItem("codes");
  return codes ? JSON.parse(codes) : [];
};

export const setCodes = (code: string) => {
  const codes = getCodes();
  codes.push(code);
  localStorage.setItem("codes", JSON.stringify(codes));
  console.log(codes);
};
