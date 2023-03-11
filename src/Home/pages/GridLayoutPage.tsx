import { ImageList } from "../../ui/components/ImageList"
import { gridImageList } from "../../ui/data/imageList"

export const GridLayoutPage = () => {
    return (
        <div className="grid_layout">  
            <div className='grid_layout_text'>
                <h2 className='text'>Comer no es solo un acto de supervivencia, es un acto de placer.</h2>      
            </div>
            
            <div className="gallery">
                <ImageList images={ gridImageList }/>
            </div>
        </div>
    )
}
