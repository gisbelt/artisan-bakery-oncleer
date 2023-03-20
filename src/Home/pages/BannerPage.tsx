import { ImageList } from '../../ui/components/ImageList'
import { Line } from '../../ui/components/Line'
import { shapesImageList } from '../../ui/data/imageList'
import { BannerLogo } from '../components/BannerLogo'
import logo from '/assets/img/logo.png';

export const BannerPage = () => {
 
    return (
        <section className='banner'>
            <BannerLogo logo={ logo } />

            <div className='banner_body'>
                <div>
                    <ImageList images={ shapesImageList }/>
                </div>
                <h1>Repostería Artesanal</h1>
                <Line />
                <p>
                    Oncleer nació hace tres años de la unión de dos personas apasionadas: 
                    Andrev, chef, y Viktoria, contadora. Juntando nuestras habilidades y 
                    esfuerzos, hemos creado algo único y especial en el mundo de los 
                    postres en Santiago.
                </p>               
            </div>
            
            <div className='banner_box_btn'>
                <button className='button banner_btn'>
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
            </div>
        </section>
    )
}
