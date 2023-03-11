import { FC, useContext } from "react";
import { CakesContext } from "../pages/context/CakesContext";

interface Props {
    id: string;
    title: string;
}


export const TabsButtons: FC<Props>  = ({ id, title }) => {

    const context = useContext(CakesContext);
        if (typeof context === "string") {
        return null; // Opcional: Si el contexto es una cadena, no hay nada que hacer, así que devuelve nulo.
    }

    const { handleClick, activeTab } = context;

    return (
        <button onClick={ () => handleClick(id) } className={`button ${activeTab === id ? "active" : ""}`}>
            { title }
        </button>
    )
}
