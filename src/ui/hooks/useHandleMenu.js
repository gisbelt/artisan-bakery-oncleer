import { useState, useMemo } from "react"

export const useHandleMenu = () => {
    const [showMenu, setShowMenu] = useState( false )
    const [icon, setIcon] = useState("bi bi-list")
    const [styleItems, setStyleItems] = useState( false )

    useMemo(() => {
        return {showMenu, icon, styleItems}
    }, [showMenu, icon, styleItems])
    
    //Style active for items menu
    const handleStyle = () => setStyleItems(!styleItems)
    //Close menú when click items for mobile mode
    const closeMenu = () => {
        setShowMenu( !showMenu )
        setIcon( !icon )
    }
    //toggle menu for mobile mode
    const handleToggle = () =>{
        setShowMenu( !showMenu )
        setIcon( !icon )
    }  

    return {
        showMenu,
        icon,
        styleItems,
        handleStyle,
        closeMenu,
        handleToggle
    }
}
