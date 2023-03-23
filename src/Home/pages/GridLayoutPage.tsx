import { ImageList } from "../../ui/components/ImageList"
import { gridImageList } from "../../ui/data/imageList"

export const GridLayoutPage = () => {
    return (
        <section className="grid_layout">  
            <div className='grid_layout_text'>
                <h2 className='text' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="800">
                    Comer no es solo un acto de supervivencia, es un acto de placer.
                </h2>      
            </div>
            
            <div className="gallery" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="900">
                <ImageList images={ gridImageList }/>
            </div>
        </section>
    )
}
