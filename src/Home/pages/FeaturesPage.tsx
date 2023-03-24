import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom";
import { ImageList } from "../../ui/components/ImageList";
import { Line } from "../../ui/components/Line";
import { shapesImageList } from "../../ui/data/imageList";
import { FeaturesLeft } from "../components/FeaturesLeft";

const reviewStarts: string[] = ['bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill'];

export const FeaturesPage = () => {
    return (
      <Parallax strength={600} blur={{ min: -3, max: 5 }} bgImage="/assets/img/caja-varios2.jfif" bgImageAlt="features image" >
        <section className="features">
          <ImageList images={ shapesImageList }/>

          <div className="features_box">
            <div className="features_box_left" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="400">
              <FeaturesLeft />
            </div>

            <div className="features_box_right" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="400">
              <h2>Hacemos felices <br />a nuestros clientes</h2>
              <Line />
              <p>
                ¡Hola, Somos Oncleer! 
                Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos. 
                Maecenas ultricies, orci molestie blandit interdum.
              </p>
              <Link 
                to={"/cakes/cakes-tab"}
                className='button features_box_right_btn'
              >
                  Mira nuestros Postres
              </Link>
            </div>
          </div>
        </section>
      </Parallax>
    )
}
