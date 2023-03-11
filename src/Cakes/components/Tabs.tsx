import { FC, useContext } from "react";
import { CakesContext } from "../pages/context/CakesContext";

interface Props {
    children: React.ReactNode;
    id: string;
}

export const Tabs: FC<Props> = ({ children, id }) => {

    const context = useContext(CakesContext);
    
    if (typeof context === "string") {
        return null; // Opcional: Si el contexto es una cadena, no hay nada que hacer, así que devuelve nulo.
    }

    const { activeTab } = context;

    return (
        activeTab === id ? (
            <div className="Tabs"> 
                { children } 
            </div> 
        ) : null
    )
}
