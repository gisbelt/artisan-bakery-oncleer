import { AboutBannerPage } from './AboutBannerPage'
import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { TeamPage } from './TeamPage'
import '../About.css'
import { Footer } from '../../ui/components/Footer'

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
      <TeamPage />
      <Footer />
    </>
  )
}
