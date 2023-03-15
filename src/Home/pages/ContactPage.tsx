import { ImageList } from '../../ui/components/ImageList'
import { Line } from '../../ui/components/Line'
import { shapesImageList } from '../../ui/data/imageList'
import { ContactForm } from '../components/ContactForm'

export const ContactPage = () => {

    

    return (
        <section className='contact'>
            {/* <div>
                <ImageList images={ shapesImageList }/>
            </div>
             */}

            <div className="contact_body">
                <div className="contact_body_text">
                    <h2>Ponte en Contacto</h2>
                    <Line />
                </div>                
            </div>

            <ContactForm />
        </section>
    )
}
