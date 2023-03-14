import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useModal } from "../../ui/hooks/useModal";
import { ModalImages } from "../../ui/components/ModalImages";

interface Tabs {
    id: string;
    img: string;
    alt: string;
    title: string;
    description: string;
}
interface Props {
    tabsItems: Tabs[]
}

export const TabsChildren: FC<Props> = ({ tabsItems }) => {

    const { isModalOpen, selectedImageUrl, handleOpen, handleClose } = useModal()

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                    clickable: true,
                    type: 'fraction'
                }}
                navigation={true}
                breakpoints={{
                    "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    },
                    "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                    "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    },
                    "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    },
                    1054 : {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1258: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    }
                }}
                modules={[FreeMode,  Pagination, Navigation ]}
                className="mySwiper"
            >
                {
                    tabsItems.map((item, index) => (
                        <SwiperSlide key={ item.id } virtualIndex={ index }>
                            <div className="tabs_children">
                                <div className="tabs_children_img">
                                    <a className="overlay"><i className="bi bi-eye overlay-i" onClick={() => handleOpen(item.img)} ></i></a>
                                    <img src={ item.img } alt={ item.alt } />
                                </div>
                                <div className="tabs_children_text">
                                    <h3>{ item.title }</h3>
                                    <p>{ item.description } </p>
                                </div>
                                <div className="tabs_children_btn">
                                    <hr />
                                    <button className="button"> Comprar </button>
                                </div>                            
                            </div>
                        </SwiperSlide>
                    ))
                }            
            </Swiper>

            {isModalOpen && (
                <ModalImages isModalOpen={isModalOpen} handleClose={handleClose} >
                    <img src={selectedImageUrl} alt="Modal" />
                </ModalImages>
            )}
        </>
    )
}
