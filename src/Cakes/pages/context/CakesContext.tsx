import { createContext } from "react";

interface ContextType {
    activeTab: string;
    handleClick: (id: string) => void;
}

export const CakesContext = createContext<ContextType | string>("tab1")