import { BannerLogo } from "../../Home/components/BannerLogo"
import { Line } from "../../ui/components/Line";
import logo from '/assets/img/logo.png';
import cake from '/assets/gifs/cake.gif';


export const AboutBannerPage = () => {
    return (
        <section className="about_us">
            <BannerLogo logo={ logo } />

            <div className="about_us_body">
                <h1>Sobre Nosotros</h1>
                <Line />
                <div className="about_us_body_cols">
                    <div></div>
                    <div>
                        <img src={ cake } alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
