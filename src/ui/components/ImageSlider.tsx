import { SwiperSlide } from "swiper/react";
import { ImageList } from "./ImageList";

interface Image {
  id: number;
  src: string;
  alt: string;
  class: string;
}

interface Props {
  images: Image[];
}

export const ImageSlider = (props: Props) => {
    return (
        <>
        {props.images.map((image, index) => (
            <SwiperSlide virtualIndex={index} >
                <ImageList images={[image]} />
            </SwiperSlide>
        ))}
        </>
    );
};
