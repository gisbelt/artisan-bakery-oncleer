import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { CakesTabPage } from './CakesTabPage'
import { CakesBannerPage } from './CakesBannerPage'
import { CakesProvider } from './context/CakesProvider'
import '../Cakes.css'
import { Footer } from '../../ui/components/Footer'

export const CakesChildren = [
    {
        path: "/cakes/cakes-tab", 
        index: true, 
        element: <CakesTabPage />,
    },
]

export const CakesPage = () => {
    return (
        <CakesProvider>
            <Navbar items={ menuItems } />
            <CakesBannerPage />
            <CakesTabPage />
            <Footer />
        </CakesProvider>
    )
}
