import _ from "lodash";

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

export const isAccess = (codes: string[], accessCodes: string[]) => {
  console.log("codes", codes);
  console.log("accessCodes", accessCodes);

  const intersectionArr = _.intersection(
    codes.map((i) => i.toLowerCase()),
    accessCodes.map((i) => i.toLowerCase())
  );

  console.log("intersectionArr", intersectionArr);

  return intersectionArr.length > 0;
};
