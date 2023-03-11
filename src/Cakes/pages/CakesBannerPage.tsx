import { BannerLogo } from '../../Home/components/BannerLogo'
import { CakesParallaxCarousel } from '../components/CakesParallaxCarousel'

export const CakesBannerPage = () => {
    return (
        <section className='cakes_parallax'>

            <BannerLogo />
            <CakesParallaxCarousel />
            
        </section>
    )
}
