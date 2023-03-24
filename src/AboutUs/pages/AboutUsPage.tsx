import { AboutBannerPage } from './AboutBannerPage'
import { Navbar } from '../../ui/components/Navbar'
import { menuItems } from '../../ui/data/menuItems'
import { TeamPage } from './TeamPage'
import { Footer } from '../../ui/components/Footer'
import { ScrollTop } from '../../ui/components/ScrollTop'
import { useEffect } from 'react'
import '../About.css'

export const AboutUsChildren = [
    {
        path: "/aboutus/quienes-somos", 
        index: true, 
        // element: <FeaturesPage />,
    },
]

export const AboutUsPage = () => {

  useEffect(() => {
      document.title = 'Sobre Oncleer - Oncleer';
  }, []);

  return (
    <>
      <Navbar items={ menuItems } />
      <AboutBannerPage />
      <TeamPage />
      <Footer />
      <ScrollTop />
    </>
  )
}
