import { Outlet } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { BannerPage } from './BannerPage'
import { FeaturesPage } from './FeaturesPage'
import { GridLayoutPage } from './GridLayoutPage'
import '../Home.css'
import { ReactNode } from 'react'
import { ContactPage } from './ContactPage'
import { CounterPage } from './CounterPage'

interface Routes {
    path: string;
    index: boolean;
    element: ReactNode;
    children?: ReactNode; 
}

export const HomeChildren: Routes[] = [
    {
        path: "/features", 
        index: true, 
        element: <FeaturesPage />,
    },
    {
        path: "/grid-cakes", 
        index: true, 
        element: <GridLayoutPage />,
    },
    {
        path: "/counter", 
        index: true, 
        element: <CounterPage />,
    },
    {
        path: "/contact", 
        index: true, 
        element: <ContactPage />,
    },
]

// export const HomeChildren = [
//     <FeaturesPage key="features" />,
//     <GridLayoutPage key="grid-cakes" />
// ];

export const HomePage = () => {
    return (
        <>
            <Navbar items={ menuItems } />
            <BannerPage />
            <FeaturesPage />
            <GridLayoutPage />
            <CounterPage />
            <ContactPage />
            {/* <Outlet /> */}
        </>
    )
}
