import { BannerArrow } from '../../Home/components/BannerArrow';
import { BannerLogo } from '../../Home/components/BannerLogo'
import { useScrollTo } from '../../ui/hooks/useScrollTo';
import { CakesParallaxCarousel } from '../components/CakesParallaxCarousel'
import logo from '/assets/img/logo.png';

export const CakesBannerPage = () => {

    const { inViewRef } = useScrollTo('/cakes')

    return (
        <section className='cakes_parallax' ref={ inViewRef }>

            <BannerLogo logo={ logo } />
            <CakesParallaxCarousel />
        </section>
    )
}
