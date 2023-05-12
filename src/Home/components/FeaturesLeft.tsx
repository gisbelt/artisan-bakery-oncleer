import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonials {
    id: number;
    testimonial: string;
    img: string;
    name: string;
    review: string;
}

const reviewStarts: string[] = ['bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill', 'bi-star-fill'];

export const FeaturesLeft = () => {
    
    const [testimonials, setTestimonials] = useState<Testimonials[]>([
        { 
            id: 1, 
            testimonial: 'Su trabajo excelente y se tiente todo el amor que le ponen. Me alegraron demasiado la tarde', 
            img: 'https://preview.uideck.com/items/smash/assets/images/xauthor-2.jpg.pagespeed.ic.wko01I0ecD.webp', 
            name: 'Ale', 
            review: '(5 Reseñas)' 
        },
        { 
            id: 2, 
            testimonial: 'Una no puede dejar de pedirles dos semanas sin que ustedes se superen cada vez más.', 
            img: 'https://preview.uideck.com/items/smash/assets/images/xauthor-2.jpg.pagespeed.ic.wko01I0ecD.webp', 
            name: 'Génesis', 
            review: '(7 Reseñas)' 
        },
        { 
            id: 3, 
            testimonial: '¡Me encantó la puntualidad, y se nota la frescura de los productos!', 
            img: 'https://preview.uideck.com/items/smash/assets/images/xauthor-2.jpg.pagespeed.ic.wko01I0ecD.webp', 
            name: 'Rodrigo', 
            review: '(4 Reseñas)' 
        },
        { 
            id: 4, 
            testimonial: 'Dije que no le gustaba probar cosas nuevas, pero me arriesgué con un cheesecake porque le gusta la frutilla y quedó impresionado con el sabor. Dijo que nunca había comido uno tan rico.', 
            img: 'https://preview.uideck.com/items/smash/assets/images/xauthor-2.jpg.pagespeed.ic.wko01I0ecD.webp', 
            name: 'Carli', 
            review: '(6 Reseñas)' 
        },
        { 
            id: 5, 
            testimonial: 'Estaban deliciosos los macarons y las cheesecakes. Nos encantó la cajita. ¡Felicidades por tanta dedicación!', 
            img: 'https://preview.uideck.com/items/smash/assets/images/xauthor-2.jpg.pagespeed.ic.wko01I0ecD.webp', 
            name: 'Williams', 
            review: '(5 Reseñas)' 
        },
    ])

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                fade: false,
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                fade: false,
                slidesToShow: 1,
                adaptiveHeight: true,
            },
        },
        ],
    };

    return (
        <Slider {...settings}>            
            {testimonials.map((item) => (
                 <div key={item.id} className='features_content'>
                    <div className="features_text">
                        <p className="text">
                        "{item.testimonial}"
                        </p>
                        <hr />          
                    </div>
                    <div className="features_testimonials">
                        <div className="features_image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="features_author">
                            <p>{item.name}</p>
                        </div>
                        <div className="features_review">
                            <div>
                                {reviewStarts.map((stars, index) => (
                                    <i key={index} className={`bi ${stars}`}></i>
                                ))}
                            </div>                  
                            <span>{item.review}</span>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}
