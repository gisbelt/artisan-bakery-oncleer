import { ImageList } from '../../ui/components/ImageList'
import { Line } from '../../ui/components/Line'
import { shapesImageList } from '../../ui/data/imageList'
import { useScrollTo } from '../../ui/hooks/useScrollTo';
import { BannerArrow } from '../components/BannerArrow';
import { BannerLogo } from '../components/BannerLogo'
import logo from '/assets/img/logo.png';

export const BannerPage = () => {
    
    const { inViewRef } = useScrollTo('/') 

    return (
        <section className='banner' ref={ inViewRef } >
            <BannerLogo logo={ logo } />

            <div className='banner_body'>
                <div>
                    <ImageList images={ shapesImageList }/>
                </div>
                <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
                    Repostería Artesanal
                </h1>
                <Line />
                <p data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="400">
                    Oncleer nació hace tres años de la unión de dos personas apasionadas: 
                    Andrev, chef, y Viktoria, contadora. Juntando nuestras habilidades y 
                    esfuerzos, hemos creado algo único y especial en el mundo de los 
                    postres en Santiago.
                </p>               
            </div>
            
            <div className='banner_box_btn'>
                <button className='button banner_btn' data-aos="fade-right" data-aos-easing="ease" data-aos-delay="800">
                    Escríbenos
                </button>

                <div className="banner_btn_social">
                    <a href='' title=''>
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href='' title=''>
                        <i className="bi bi-facebook"></i>
                    </a>                    
                </div>

                <BannerArrow />
            </div>
        </section>
    )
}
