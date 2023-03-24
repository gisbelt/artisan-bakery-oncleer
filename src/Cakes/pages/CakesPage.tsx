import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { CakesTabPage } from './CakesTabPage'
import { CakesBannerPage } from './CakesBannerPage'
import { CakesProvider } from './context/CakesProvider'
import { Footer } from '../../ui/components/Footer'
import { ScrollTop } from '../../ui/components/ScrollTop'
import { useEffect } from 'react'
import '../Cakes.css'

export const CakesChildren = [
    {
        path: "/cakes/cakes-tab", 
        index: true, 
        element: <CakesTabPage />,
    },
]

export const CakesPage = () => {

    useEffect(() => {
        document.title = 'Postres - Oncleer';
    }, []);

    return (
        <CakesProvider>
            <Navbar items={ menuItems } />
            <CakesBannerPage />
            <CakesTabPage />
            <Footer />
            <ScrollTop />
        </CakesProvider>
    )
}
