import { createContext } from "react";
import type { LanguageContextType } from "../types/lang";

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
