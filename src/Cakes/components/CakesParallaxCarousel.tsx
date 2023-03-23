import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination } from "swiper";
import { Line } from "../../ui/components/Line";
import { cakesParallaxImageList } from "../../ui/data/imageList";
import { useModal } from "../../ui/hooks/useModal";
import { ModalImages } from "../../ui/components/ModalImages";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";


export const CakesParallaxCarousel = () => {

    const { isModalOpen, selectedImageUrl, handleOpen, handleClose } = useModal()

    return (
        <div className="cakes_parallax_body">
            <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
                Nuestros Postres
            </h1>
            <Line />
            <Swiper
                effect={"cards"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                pagination={true}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                    },
                    "@0.75": {
                      slidesPerView: 1,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                    },
                    "@1.50": {
                      slidesPerView: 2,
                    },
                }}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
            >
                {
                    cakesParallaxImageList.map((image, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <img src={image.src} alt={image.alt} onClick={() => handleOpen(image.src)} />
                        </SwiperSlide>
                    ))
                }   
            </Swiper>

            {isModalOpen && (
                <ModalImages isModalOpen={isModalOpen} handleClose={handleClose} >
                    <img src={selectedImageUrl} alt="Modal" />
                </ModalImages>
            )}
        </div>
    )
}
