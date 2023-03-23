import { BannerLogo } from "../../Home/components/BannerLogo"
import { Line } from "../../ui/components/Line";
import logo from '/assets/img/logo.png';
import cake from '/assets/gifs/cake.gif';
import blob from '/assets/img/blob.svg';
import blob2 from '/assets/img/blob2.svg';
import shape09 from '/assets/img/shape-09.svg';
import people from '/assets/img/people.png';
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";


export const AboutBannerPage = () => {
    return (
        <Parallax strength={300} blur={{ min: -10, max: 10 }} bgImage="/assets/img/caja-bocados.jfif" bgImageAlt="about us image" >
        <section className="about_us">
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
                        <Link to="/cakes" className="button">Nuestras creaciones</Link>
                    </div>
                    <div className="about_us_body_right">
                        <img src={ blob2 } alt="" />
                    </div>
                </div>
            </div>
        </section>
        </Parallax>
    )
}
