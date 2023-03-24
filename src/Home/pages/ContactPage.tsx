import { Line } from '../../ui/components/Line'
import { ContactForm } from '../components/ContactForm'
import { useScrollTo } from '../../ui/hooks/useScrollTo';

export const ContactPage = () => {

    const { inViewRef } = useScrollTo('/contact')

    return (
        <section className='contact' ref={ inViewRef }>
            <div className="contact_body">
                <div className="contact_body_text">
                    <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="800">
                        Ponte en Contacto
                    </h2>
                    <Line />
                </div>                
            </div>

            <ContactForm 
                fields={[
                    { class: 'form_input input1', type: 'text', placeholder: 'Nombre', name: 'name' },
                    { class: 'form_input input2', type: 'email', placeholder: 'Correo', name: 'email' },
                    { class: 'form_input input3', type: 'text', placeholder: 'Asunto', name: 'subject' },
                ]}
            />
        </section>
    )
}
