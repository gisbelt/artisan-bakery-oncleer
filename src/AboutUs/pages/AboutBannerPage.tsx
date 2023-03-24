import { BannerLogo } from "../../Home/components/BannerLogo"
import { Line } from "../../ui/components/Line";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { useScrollTo } from "../../ui/hooks/useScrollTo";
import logo from '/assets/img/logo.png';

export const AboutBannerPage = () => {

    const { inViewRef } = useScrollTo('/aboutus') 

    return (
        <Parallax strength={300} blur={{ min: -10, max: 10 }} bgImage="/assets/img/caja-bocados.jfif" bgImageAlt="about us image" >
        <section className="about_us" ref={ inViewRef }>
            <BannerLogo logo={ logo } />

            <div className="about_us_body">
                <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
                    Sobre Nosotros
                </h1>
                <Line />
                <div className="about_us_body_cols">
                    <div className="about_us_body_left" data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="400">
                        <div><h2>Conócenos</h2></div>
                        <p>
                            Nuestra especialidad en Oncleer son los deliciosos cheesecakes, los bocados, las y tortas personalizadas. 
                            Con una receta única y un proceso de fabricación cuidadoso, cada uno de nuestros productos es una verdadera obra de arte culinario, 
                            desde la torta simple que nos hacía nuestra madre en casa para celebrar nuestros primeros cumpleaños, 
                            hasta la noche estrellada.
                        </p>
                        <p>
                            Durante estos años, hemos aplicado nuestra experiencia y conocimiento para crear postres de alta calidad y asequibles. 
                            Cada postre en Oncleer es elaborado con los ingredientes más frescos y de alta calidad, garantizando un sabor único y satisfactorio. 
                        </p>
                        <Link to="/cakes/cakes-tab" className="button">Nuestras creaciones</Link>
                    </div>

                    {/* <div className="about_us_body_right">
                        <img src={ macarons4 } alt="" />
                    </div> */}
                </div>
            </div>
        </section>
        </Parallax>
    )
}
