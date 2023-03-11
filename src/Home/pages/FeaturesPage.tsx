import { ImageList } from "../../ui/components/ImageList";
import { Line } from "../../ui/components/Line";
import { shapesImageList } from "../../ui/data/imageList";
import { FeaturesLeft } from "../components/FeaturesLeft";

const reviewStarts: string[] = ['bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill'];

export const FeaturesPage = () => {
    return (
      <section className="features">
        <ImageList images={ shapesImageList }/>

        <div className="features_box">
          <div className="features_box_left">
            <FeaturesLeft />
          </div>

          <div className="features_box_right">
            <h2>Hacemos felices <br />a nuestros clientes</h2>
            <Line />
            <p>
              ¡Hola, Somos Oncleer! 
              Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad 
              litora torquent per conubia nostra, per inceptos himenaeos. 
              Maecenas ultricies, orci molestie blandit interdum.
            </p>
            <button className='button features_box_right_btn'>
                Síguenos en Instagram
            </button>
          </div>
        </div>
      </section>
    )
}
