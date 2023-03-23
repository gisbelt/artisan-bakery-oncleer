import { Link } from "react-router-dom"
import { BannerLogo } from "../../Home/components/BannerLogo"
import { Line } from "./Line"
import logoInvert from '/assets/img/logo-invert.png';

export const Footer = () => {
    return (
        <section className="footer">
            <footer className="footer_body">
                <div className="footer_logo">
                    <BannerLogo logo={ logoInvert } />
                </div>

                <div className="footer_nav" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="400">
                    <ul>
                        <li> <Link to="/">Inicio</Link> </li>
                        <li> <Link to="/aboutus">Quiénes Somos</Link> </li>
                        <li> <Link to="/cakes">Nuestros Postres</Link> </li>
                    </ul>
                </div>

                <Line />

                <div className="footer_copyright_area">
                    <div className="copyright_area_text">
                        <p>
                            Oncleer © 2023 Copyright | 
                            Made with 
                            <i className="bi bi-heart-fill"></i>  
                            by Gisbel Torres
                        </p>
                    </div>
                    <div className="copyright_area_socials">
                        <a href='' title='Instagram'>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href='' title='Facebook'>
                            <i className="bi bi-facebook"></i>
                        </a>   
                        <a href='' title='Twitter'>
                            <i className="bi bi-twitter"></i>
                        </a>                   
                    </div>
                </div>
            </footer>
        </section>
    )
}
