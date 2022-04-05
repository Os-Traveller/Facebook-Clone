import { createContext, useState } from "react";

export const BasicInfoContext = createContext();
export const BasicInfoProvider = (props) => {
  return <BasicInfoContext.Provider value={"Hi I am Faisal"}>{props.children}</BasicInfoContext.Provider>;
};
