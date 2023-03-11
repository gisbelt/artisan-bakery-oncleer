import { ContextType, FC, useRef, useState } from "react"
import { CakesContext } from "./CakesContext"

interface Props {
    children: React.ReactNode;
}

export const CakesProvider: FC<Props> = ({ children }) => {

    const [activeTab, setActiveTab] = useState<string>("tab1");    

    const handleClick = (id: string) => {
        setActiveTab(id);
    };

    return (
        <CakesContext.Provider value={{ handleClick, activeTab }}     >
            { children }
        </CakesContext.Provider>
    )
}
