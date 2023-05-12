import { Line } from "../../ui/components/Line";
import { cakesParallaxImageList } from "../../ui/data/imageList";
import { useModal } from "../../ui/hooks/useModal";
import { ModalImages } from "../../ui/components/ModalImages";
import { BannerArrow } from "../../Home/components/BannerArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export const CakesParallaxCarousel = () => {

    const { isModalOpen, selectedImageUrl, handleOpen, handleClose } = useModal()

    return (
        <div className="cakes_parallax_body">
            <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
                Cheesecakes <span>|</span> Tortas <span>|</span> Postres
            </h1>
            <Line />
            <Swiper
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 40,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                roundLengths={true}
                loop={true}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                breakpoints={
                    {
                        "@0.00": {
                            slidesPerView: 2,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                        },
                    }
                }
                modules={[EffectCoverflow, EffectCards, Pagination, Autoplay]}
                className="cakes_parallax_swiper"
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

            <BannerArrow />

        </div>
    )
}
