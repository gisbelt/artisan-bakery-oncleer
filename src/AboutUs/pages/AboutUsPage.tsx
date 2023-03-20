import { AboutBannerPage } from './AboutBannerPage'
import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import '../About.css'

export const AboutUsChildren = [
    {
        path: "/aboutus/quienes-somos", 
        index: true, 
        // element: <FeaturesPage />,
    },
]

export const AboutUsPage = () => {
  return (
    <>
      <Navbar items={ menuItems } />
      <AboutBannerPage />
    </>
  )
}
