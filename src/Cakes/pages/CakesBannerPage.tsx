import { BannerArrow } from '../../Home/components/BannerArrow';
import { BannerLogo } from '../../Home/components/BannerLogo'
import { CakesParallaxCarousel } from '../components/CakesParallaxCarousel'
import logo from '/assets/img/logo.png';

export const CakesBannerPage = () => {
    return (
        <section className='cakes_parallax'>

            <BannerLogo logo={ logo } />
            <CakesParallaxCarousel />
            <BannerArrow />
        </section>
    )
}
