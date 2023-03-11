import { Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { BannerPage } from './BannerPage'
import { FeaturesPage } from './FeaturesPage'
import { GridLayoutPage } from './GridLayoutPage'
import '../Home.css'


export const HomeChildren = [
    {
        path: "/home/features", 
        index: true, 
        element: <FeaturesPage />,
    },
    {
        path: "/home/grid-cakes", 
        index: true, 
        element: <GridLayoutPage />,
    },
]

export const HomePage = () => {
    return (
        <>
            <Navbar items={ menuItems } />
            <BannerPage />
            <FeaturesPage />
            <GridLayoutPage />
            {/* <Outlet /> */}
        </>
    )
}
