"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { EstimateTemplateType } from "../models/mongoose/estimateTemplate";

interface estimateContextType {
  estimateTemplates: EstimateTemplateType[] | null | undefined,
  setEstimateTemplates: Dispatch<SetStateAction<EstimateTemplateType[] | null | undefined>>
}

export const EstimateTemplateContext = createContext<estimateContextType | null>(null);

const EstimateTemplateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [estimateTemplates, setEstimateTemplates] = useState<EstimateTemplateType[] | null>();

  return <EstimateTemplateContext.Provider value={{
    estimateTemplates: estimateTemplates,
    setEstimateTemplates: setEstimateTemplates
  }}>{children}</EstimateTemplateContext.Provider>
}

export default EstimateTemplateContextProvider;
