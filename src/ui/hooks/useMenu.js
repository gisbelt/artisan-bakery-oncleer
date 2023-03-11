import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next";

export const useMenu = () => {

    const { t } = useTranslation()


    // ********************************************************
    //Menu sticky
    const [sticky, setSticky] = useState( false )
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sticky]);

    // ********************************************************
    //Menu items
    const [headerItems, setHeaderItems] = useState([
        {id: '1', name: 'Home', route: 'home', offset: -100}, 
        {id: '2', name: t('menu-1'), route: 'perfil', offset: -100}, 
        {id: '3', name: t('menu-2'), route: 'habilidades', offset: -100}, 
        {id: '4', name: t('menu-3'), route: 'portafolio', offset: -100}, 
        {id: '5', name: t('menu-4'), route: 'rrss', offset: -100}, 
        {id: '6', name: t('menu-5'), route: 'idiomas', offset: -100}, 
        {id: '7', name: t('menu-6'), route: 'contacto', offset: -150},
    ])

    const menuItems = useMemo(() => headerItems, [ headerItems ])
    
    return {
        sticky,
        menuItems,
        ...menuItems
    }

}
